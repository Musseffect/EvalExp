import expGrammarLexer from "./grammar/antlrOutput/expGrammarLexer.js";
import expGrammarVisitor from "./grammar/antlrOutput/expGrammarVisitor.js";
import expGrammarParser from "./grammar/antlrOutput/expGrammarParser.js";
import {
    ExpressionNode,
    BoolExpressionNode,
    BoolNegationNode,
    ConstantNode,
    FunctionNode,
    DivisionNode,
    MultiplicationNode,
    AdditionNode,
    SubtractionNode,
    NegationNode,
    BoolLNode,
    BoolLENode,
    BoolGNode,
    BoolGENode,
    BoolENode,
    BoolNENode,
    BoolAndNode,
    TernaryOperatorNode,
    TextPosition,
    BoolOrNode,
    BoolConstantNode, IdentifierNode
} from "./astNode";
import ErrorListener from "./errorListener";
import { ParseTreeVisitor } from "antlr4/tree/Tree";
import { BoolExpression } from "./expression.js";


class Visitor extends expGrammarVisitor.expGrammarVisitor{
    errorListener:ErrorListener;
    indicies:Record<string,number>;
    idCount:number = 0;
    constructor(){
        super();
        this.indicies = {};
    }
    startExpression(ctx:any, errorListener:ErrorListener):{expDef:ExpressionNode,varIndicies:Record<string,number>}{
        this.errorListener = errorListener;
        return {expDef:this.visitExpression(ctx),varIndicies:this.indicies};
    }
    startBoolExpression(ctx:any, errorListener:ErrorListener):{expDef:BoolExpressionNode,varIndicies:Record<string,number>}{
        this.errorListener = errorListener;
        return {expDef:this.visitBoolExpression(ctx),varIndicies:this.indicies};
    }
    visitBoolExpression(ctx:any):BoolExpressionNode{
        return (this as unknown as ParseTreeVisitor).visit(ctx) as BoolExpressionNode;
    }
    visitExpression(ctx:any):ExpressionNode{
        return (this as unknown as ParseTreeVisitor).visit(ctx) as ExpressionNode;
    }
    visitEBoolBinaryOperator(ctx:any):BoolExpressionNode{
        let op:BoolExpressionNode = null;
        switch(ctx.op.type){
            case expGrammarParser.expGrammarParser.L:
                op = new BoolLNode(
                    this.visitExpression(ctx.leftexp),
                    this.visitExpression(ctx.rightexp));
                    break;
            case expGrammarParser.expGrammarParser.LE:
                op =  new BoolLENode(
                    this.visitExpression(ctx.leftexp),
                    this.visitExpression(ctx.rightexp));
                    break;
            case expGrammarParser.expGrammarParser.G:
                op =  new BoolGNode(
                     this.visitExpression(ctx.leftexp),
                     this.visitExpression(ctx.rightexp));
                     break;
            case expGrammarParser.expGrammarParser.GE:
                op = new BoolGENode(
                     this.visitExpression(ctx.leftexp),
                     this.visitExpression(ctx.rightexp));
                     break;
            case expGrammarParser.expGrammarParser.E:
                op = new BoolENode(
                     this.visitExpression(ctx.leftexp),
                     this.visitExpression(ctx.rightexp));
                     break;
            case expGrammarParser.expGrammarParser.NE:  
                op = new BoolNENode(
                     this.visitExpression(ctx.leftexp),
                     this.visitExpression(ctx.rightexp));
                     break;
            default:
                this.errorListener.add(new TextPosition(ctx.op.line,ctx.op.column,ctx.start.start,ctx.stop.stop),"Unknown binary operator");
                return null;
        }
        return op.setTextPos(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop));
    }
    visitBBoolBinaryOperator(ctx:any):BoolExpressionNode{
        let op:BoolExpressionNode = null;
        switch(ctx.op.type){
            case expGrammarParser.expGrammarParser.AND:
                op = new BoolAndNode(
                     this.visitBoolExpression(ctx.left),
                     this.visitBoolExpression(ctx.right));
                     break;
            case expGrammarParser.expGrammarParser.OR:
                op = new BoolOrNode(
                     this.visitBoolExpression(ctx.left),
                     this.visitBoolExpression(ctx.right));
                     break;
            default:
                this.errorListener.add(new TextPosition(ctx.op.line,ctx.op.column,ctx.start.start,ctx.stop.stop),"Unknown binary operator");
                return null;
        } 
        return op.setTextPos(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop));
    }
    visitBracketBoolExpression(ctx:any):BoolExpressionNode{
        return this.visitBoolExpression(ctx.boolExpression()) as BoolExpressionNode;
    }
    visitBoolUnaryOperator(ctx:any):BoolExpressionNode{
        return new BoolNegationNode(this.visitBoolExpression(ctx.boolExpression()) as BoolExpressionNode)
        .setTextPos(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop));
    }
    visitBracketExpression(ctx:any):ExpressionNode{
        return this.visitExpression(ctx.expression());
    }
    visitNumber(ctx:any):ConstantNode{
        return new ConstantNode(parseFloat(ctx.getText()))
        .setTextPos(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop));
    }
    visitConstantExpression(ctx:any):ConstantNode{
        return this.visitNumber(ctx.value);
    }
    visitTernaryOperatorExpression(ctx:any){
        return new TernaryOperatorNode(this.visitBoolExpression(ctx.condition),this.visitExpression(ctx.first),this.visitExpression(ctx.second))
        .setTextPos(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop));
    }
    visitBoolConstant(ctx:any){
        return new BoolConstantNode(ctx.value.text=="true")
        .setTextPos(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop));
    }
    visitVariableExpression(ctx:any){
        let id = ctx.id.text;
        if(!this.indicies.hasOwnProperty(id)){
            this.indicies[id] = this.idCount;
            this.idCount++;
        }
        return new IdentifierNode(id)
            .setTextPos(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop));
    }
    visitUnaryOperatorExpression(ctx:any){
        switch(ctx.op.type){
            case expGrammarParser.expGrammarParser.PLUS:
                return this.visitExpression(ctx.expression());
            case expGrammarParser.expGrammarParser.MINUS:
                return new NegationNode(this.visitExpression(ctx.expression()))
                .setTextPos(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop));
            default:
                this.errorListener.add(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop),"Unknown unary operator");
                return null;
        }
    }
    visitBinaryOperatorExpression(ctx:any):ExpressionNode{
        let op:ExpressionNode;
        switch(ctx.op.type){
            case expGrammarParser.expGrammarParser.DIVISION:
                op = new DivisionNode(
                    this.visitExpression(ctx.left),
                    this.visitExpression(ctx.right));
                    break;
            case expGrammarParser.expGrammarParser.ASTERISK:
                op = new MultiplicationNode(
                    this.visitExpression(ctx.left),
                    this.visitExpression(ctx.right));
                    break;
            case expGrammarParser.expGrammarParser.PLUS:
                op = new AdditionNode(
                    this.visitExpression(ctx.left),
                    this.visitExpression(ctx.right));
                    break;
            case expGrammarParser.expGrammarParser.MINUS:
                op = new SubtractionNode(
                    this.visitExpression(ctx.left),
                    this.visitExpression(ctx.right));
                    break;
            case expGrammarParser.expGrammarParser.CARET:
                op = new FunctionNode(
                    "pow",
                    [this.visitExpression(ctx.left),this.visitExpression(ctx.right)]);
                    break;
            default:
                    this.errorListener.add(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop),"Unknown binary operator");
                    return null;
        }
        return op
        .setTextPos(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop));
    }
    visitFunctionExpression(ctx:any){
        var args = this.visitFunctionArguments(ctx.functionArguments());
        return new FunctionNode(ctx.func.text,args)
        .setTextPos(new TextPosition(ctx.start.line,ctx.start.column,ctx.start.start,ctx.stop.stop));
    }
    visitFunctionArguments(ctx:any):ExpressionNode[]{
        var args:ExpressionNode[] = [];
        if(ctx.expression!=undefined)
            ctx.expression().forEach(function(item:any){
                args.push(this.visit(item));
            },this);
        return args;
    }
}

export default Visitor;