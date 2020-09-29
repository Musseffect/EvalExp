import ErrorMessage from "./error";
import { BoolExpressionNode,ExpressionNode, ConstantNode, AdditionNode, MultiplicationNode, FunctionNode, SubtractionNode, DivisionNode, NegationNode, BoolAndNode, BoolOrNode, BoolNegationNode, BoolGNode, BoolGENode, BoolLNode, BoolConstantNode, BoolLENode, BoolNENode, BoolENode, TernaryOperatorNode, NodeType, IdentifierNode } from "./astNode";
import { Expression, Constant, BoolExpression, BoolConstant, Addition, Subtraction, Multiplication, Division, Negation, Variable, And, Or, BoolNot, Greater, GEqual, Less, LEqual, NotEqual, Equal, Function, TernaryOperator } from "./expression";

export class ExpCompilerContext{
    indicies:Record<string,number>;
    errors:ErrorMessage[];
}
export function compileBoolExpression(item:BoolExpressionNode,context:ExpCompilerContext):BoolExpression{
    switch(item.type){
        case NodeType._And:{
            let and = item as BoolAndNode;
            return new And(compileBoolExpression(and.left,context)
            ,compileBoolExpression(and.right,context));
        }
        case NodeType._Or:{
            let or = item as BoolOrNode;
            return new Or(compileBoolExpression(or.left,context)
            ,compileBoolExpression(or.right,context));
        }
        case NodeType._Not:{
            let not = item as BoolNegationNode;
            return new BoolNot(compileBoolExpression(not.inner,context));
        }
        case NodeType._Greater:{
            let g = item as BoolGNode;
            return new Greater(compileExpression(g.left,context)
            ,compileExpression(g.right,context)
            );
        }
        case NodeType._GreaterEqual:{
            let ge = item as BoolGENode;
            return new GEqual(compileExpression(ge.left,context)
            ,compileExpression(ge.right,context)
            );
        }
        case NodeType._Less:{
            let l = item as BoolLNode;
            return new Less(compileExpression(l.left,context)
            ,compileExpression(l.right,context)
            );
        }
        case NodeType._LessEqual:{
            let le = item as BoolLENode;
            return new LEqual(compileExpression(le.left,context)
            ,compileExpression(le.right,context)
            );
        }
        case NodeType._Equal:{
            let e = item as BoolENode;
            return new Equal(compileExpression(e.left,context)
            ,compileExpression(e.right,context));
        }
        case NodeType._NotEqual:{
            let ne = item as BoolNENode;
            return new NotEqual(compileExpression(ne.left,context)
            ,compileExpression(ne.right,context));
        }
        case NodeType._BoolConstant:{
            let bc = item as BoolConstantNode;
            return new BoolConstant(bc.value);
        }
        default:
            context.errors.push(new ErrorMessage(item.textPos,"Unexpected boolean expression type at compileExpression()"));
            return new BoolConstant(false);
    }
}
export function compileExpression(item:ExpressionNode,context:ExpCompilerContext):Expression{
    switch(item.type){
        case NodeType._Addition:{
            let add = item as AdditionNode;
            return new Addition(compileExpression(add.left,context),compileExpression(add.right,context));
        } 
        case NodeType._Subtraction:{
            let sub = item as SubtractionNode;
            return new Subtraction(compileExpression(sub.left,context),compileExpression(sub.right,context));
        } 
        case NodeType._Multiplication:{
            let mul = item as MultiplicationNode;
            return new Multiplication(compileExpression(mul.left,context),compileExpression(mul.right,context));
        } 
        case NodeType._Division:{
            let div = item as DivisionNode;
            return new Division(compileExpression(div.left,context),compileExpression(div.right,context));
        }
        case NodeType._Negation:{
            let neg = item as NegationNode;
            return new Negation(compileExpression(neg.inner,context));
        }
        case NodeType._Function:{
            let fun = item as FunctionNode;
            try{
                return new Function(fun.name,fun.args.map(function(arg){
                    return compileExpression(arg,context);
                }));
            }catch(exception){
                context.errors.push(new ErrorMessage(item.textPos,exception));
                return new Constant(0);
            }
        }
        case NodeType._Constant:{
            let con = item as ConstantNode;
            return new Constant(con.value);
        }
        case NodeType._Ternary:{
            let ter = item as TernaryOperatorNode;
            return new TernaryOperator(compileBoolExpression(ter.condition,context)
            ,compileExpression(ter.true,context)
            ,compileExpression(ter.false,context));
        }
        case NodeType._Identifier:{
            let _var = item as IdentifierNode;
            if(context.indicies.hasOwnProperty(_var.id)){
                return new Variable(context.indicies[_var.id],_var.id);
            }
            context.errors.push(new ErrorMessage(item.textPos,`Unexpected variable "${_var.id}" at compileExpression()`));
            return new Constant(0);
        }
        default:
            context.errors.push(new ErrorMessage(item.textPos,"Unexpected expression type at compileExpression()"));
            return new Constant(0);
    }
}
