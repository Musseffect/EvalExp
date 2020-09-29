
export enum NodeType{
    _Constant=0,
    _Identifier,
    _Function,
    _Addition,
    _Subtraction,
    _Multiplication,
    _Division,
    _Negation,
    _Less,
    _LessEqual,
    _Greater,
    _GreaterEqual,
    _Equal,
    _NotEqual,
    _And,
    _Or,
    _Not,
    _BoolConstant,
    _Ternary
}

export class TextPosition{
    readonly line:number;
    readonly column:number;
    readonly start:number;
    readonly stop:number;
    constructor(line:number,column:number,start:number,stop:number){
        this.line = line;
        this.column = column;
        this.start = start;
        this.stop = stop;
    }
    static invalid():TextPosition{
        return new TextPosition(-1,-1,-1,-1);
    }
}

export abstract class ASTNode{
    type:number;
    textPos:TextPosition;
    constructor(type:number){
        this.type = type;
        this.textPos = TextPosition.invalid();
    }
    setTextPos(textPos:TextPosition){
        this.textPos = textPos;
        return this;
    }
}
export abstract class BoolExpressionNode extends ASTNode{
    constructor(type:number){
        super(type);
    }
    abstract clone():BoolExpressionNode;
}
export class BoolNegationNode extends BoolExpressionNode{
    inner:BoolExpressionNode;
    constructor(inner:BoolExpressionNode){
        super(NodeType._Negation);
        this.inner = inner;
    }
    clone(){
        return new BoolNegationNode(this.inner.clone());
    }
}
export class BoolLNode extends BoolExpressionNode{
    left:BoolExpressionNode;
    right:BoolExpressionNode;
    constructor(left:BoolExpressionNode,right:BoolExpressionNode){
        super(NodeType._Less);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new BoolLNode(this.left.clone(),this.right.clone());
    }
}
export class BoolLENode extends BoolExpressionNode{
    left:BoolExpressionNode;
    right:BoolExpressionNode;
    constructor(left:BoolExpressionNode,right:BoolExpressionNode){
        super(NodeType._LessEqual);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new BoolLENode(this.left.clone(),this.right.clone());
    }
}
export class BoolGNode extends BoolExpressionNode{
    left:BoolExpressionNode;
    right:BoolExpressionNode;
    constructor(left:BoolExpressionNode,right:BoolExpressionNode){
        super(NodeType._Greater);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new BoolGNode(this.left.clone(),this.right.clone());
    }
}
export class BoolGENode extends BoolExpressionNode{
    left:BoolExpressionNode;
    right:BoolExpressionNode;
    constructor(left:BoolExpressionNode,right:BoolExpressionNode){
        super(NodeType._GreaterEqual);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new BoolGENode(this.left.clone(),this.right.clone());
    }
}
export class BoolENode extends BoolExpressionNode{
    left:BoolExpressionNode;
    right:BoolExpressionNode;
    constructor(left:BoolExpressionNode,right:BoolExpressionNode){
        super(NodeType._Equal);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new BoolENode(this.left.clone(),this.right.clone());
    }
}
export class BoolNENode extends BoolExpressionNode{
    left:BoolExpressionNode;
    right:BoolExpressionNode;
    constructor(left:BoolExpressionNode,right:BoolExpressionNode){
        super(NodeType._NotEqual);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new BoolNENode(this.left.clone(),this.right.clone());
    }
}
export class BoolAndNode extends BoolExpressionNode{
    left:BoolExpressionNode;
    right:BoolExpressionNode;
    constructor(left:BoolExpressionNode,right:BoolExpressionNode){
        super(NodeType._And);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new BoolAndNode(this.left.clone(),this.right.clone());
    }
}
export class BoolOrNode extends BoolExpressionNode{
    left:BoolExpressionNode;
    right:BoolExpressionNode;
    constructor(left:BoolExpressionNode,right:BoolExpressionNode){
        super(NodeType._Or);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new BoolOrNode(this.left.clone(),this.right.clone());
    }
}
export class BoolConstantNode extends BoolExpressionNode{
    value:boolean;
    constructor(value:boolean){
        super(NodeType._BoolConstant);
        this.value = value;
    }
    clone(){
        return new BoolConstantNode(this.value);
    }
}
export abstract class ExpressionNode extends ASTNode{
    constructor(type:number){
        super(type);
    }
    abstract clone():ExpressionNode
}
export class IdentifierNode extends ExpressionNode{
    id:string;
    constructor(id:string){
        super(NodeType._Identifier);
        this.id = id;
    }
    clone(){
        return new IdentifierNode(this.id);
    }
}
export class ConstantNode extends ExpressionNode{
    value:number;
    constructor(value:number){
        super(NodeType._Constant);
        this.value = value;
    }
    clone(){
        return new ConstantNode(this.value);
    }
}
export class FunctionNode extends ExpressionNode{
    name:string;
    args:ExpressionNode[];
    constructor(name:string,args:ExpressionNode[]){
        super(NodeType._Function);
        this.name = name;
        this.args = args;
    }
    clone(){
        return new FunctionNode(this.name,this.args.map(function(item){return item.clone()}));
    }
}
export class AdditionNode extends ExpressionNode{
    left:ExpressionNode;
    right:ExpressionNode;
    constructor(left:ExpressionNode,right:ExpressionNode){
        super(NodeType._Addition);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new AdditionNode(this.left.clone(),this.right.clone());
    }
}
export class MultiplicationNode extends ExpressionNode{
    left:ExpressionNode;
    right:ExpressionNode;
    constructor(left:ExpressionNode,right:ExpressionNode){
        super(NodeType._Multiplication);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new MultiplicationNode(this.left.clone(),this.right.clone());
    }
}
export class SubtractionNode extends ExpressionNode{
    left:ExpressionNode;
    right:ExpressionNode;
    constructor(left:ExpressionNode,right:ExpressionNode){
        super(NodeType._Subtraction);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new SubtractionNode(this.left.clone(),this.right.clone());
    }
}
export class DivisionNode extends ExpressionNode{
    left:ExpressionNode;
    right:ExpressionNode;
    constructor(left:ExpressionNode,right:ExpressionNode){
        super(NodeType._Division);
        this.left = left;
        this.right = right;
    }
    clone(){
        return new DivisionNode(this.left.clone(),this.right.clone());
    }
}
export class TernaryOperatorNode extends ExpressionNode{
    condition:BoolExpressionNode;
    true:ExpressionNode;
    false:ExpressionNode;
    constructor(cond:BoolExpressionNode,tr:ExpressionNode,fls:ExpressionNode){
        super(NodeType._Ternary);
        this.condition = cond;
        this.true = tr;
        this.false = fls;
    }
    clone(){
        return new TernaryOperatorNode(this.condition.clone(),this.true.clone(),this.false.clone());
    }
}
export class NegationNode extends ExpressionNode{
    inner:ExpressionNode;
    constructor(inner:ExpressionNode){
        super(NodeType._Negation);
        this.inner = inner;
    }
    clone(){
        return new NegationNode(this.inner.clone());
    }
}