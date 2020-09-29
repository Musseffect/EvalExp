import { BoolExpression, Expression } from "./expression";
import {functionDictionary} from "./functions";
import ErrorMessage from "./error";
import Visitor from "./visitor";
import { compileBoolExpression, compileExpression, ExpCompilerContext } from "./expressionCompiler";
import ErrorListener from "./errorListener";
import { CompilerError } from "./compilerError";
import expGrammarLexer from "./grammar/antlrOutput/expGrammarLexer.js";
import expGrammarParser from "./grammar/antlrOutput/expGrammarParser.js";
import antlr4, { Lexer, Parser } from "antlr4";

export function compile(expressionString:string,requiredVariables?:string[]):Expression{
    let errors:ErrorMessage[] = [];

    var chars = new antlr4.InputStream(expressionString);
    var lexer = new expGrammarLexer.expGrammarLexer(chars);
    (lexer as unknown as Lexer).removeErrorListeners();
    var listener = new ErrorListener(errors);
    (lexer as unknown as Lexer).addErrorListener(listener);
    //@ts-ignore
    lexer.strictMode = false;
    var tokens = new antlr4.CommonTokenStream(lexer as unknown as Lexer);
    var parser = new expGrammarParser.expGrammarParser(tokens);
    
    (parser as unknown as Parser).removeErrorListeners();
    (parser as unknown as Parser).addErrorListener(listener);
    var visitor = new Visitor();
    (parser as unknown as Parser).buildParseTrees = true;
    var tree = parser.expression(0);
    if(errors.length>0){
        throw new CompilerError(errors);
    }
    let {expDef, varIndicies} = visitor.startExpression(tree, listener);
    if(errors.length>0){
        throw new CompilerError(errors);
    }
    let context = new ExpCompilerContext();
    if(requiredVariables){
        context.indicies = {};
        requiredVariables.forEach((val:string,id:number)=>context.indicies[val] = id);
    }
    else
        context.indicies = varIndicies;
    context.errors = errors;
    let expression = compileExpression(expDef,context).simplify();
    if(errors.length>0){
        throw new CompilerError(errors);
    }
    return expression;
}

export function compileBool(expressionString:string,requiredVariables?:string[]):BoolExpression{
    let errors:ErrorMessage[] = [];

    var chars = new antlr4.InputStream(expressionString);
    var lexer = new expGrammarLexer.expGrammarLexer(chars);
    (lexer as unknown as Lexer).removeErrorListeners();
    var listener = new ErrorListener(errors);
    (lexer as unknown as Lexer).addErrorListener(listener);
    //@ts-ignore
    lexer.strictMode = false;
    var tokens = new antlr4.CommonTokenStream(lexer as unknown as Lexer);
    var parser = new expGrammarParser.expGrammarParser(tokens);
    
    (parser as unknown as Parser).removeErrorListeners();
    (parser as unknown as Parser).addErrorListener(listener);
    var visitor = new Visitor();
    (parser as unknown as Parser).buildParseTrees = true;
    var tree = parser.boolExpression(0);
    if(errors.length>0){
        throw new CompilerError(errors);
    }
    let {expDef, varIndicies} = visitor.startBoolExpression(tree, listener);
    if(errors.length>0){
        throw new CompilerError(errors);
    }
    let context = new ExpCompilerContext();
    if(requiredVariables){
        context.indicies = {};
        requiredVariables.forEach((val:string,id:number)=>context.indicies[val] = id);
    }
    else
        context.indicies = varIndicies;
    context.errors = errors;
    let expression = compileBoolExpression(expDef,context).simplify();
    if(errors.length>0){
        throw new CompilerError(errors);
    }
    return expression;
}

export function $eval(expression:string,variables:Record<string,number>):number{
    if(!variables)
        variables = {};
    let exp = compile(expression,Object.keys(variables));
    return exp.$eval(variables);
}

export function defineFunction(name:string,func:(...x:number[])=>number){
    functionDictionary[name] = {
        name,
        argCount:func.length,
        derivatives:null,
        exec:(args:number[])=>{return func(...args);},
        getDerivative:null
    };
}
export function functionNames(){
    return Object.keys(functionDictionary);
}




