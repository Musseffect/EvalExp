# EvalExp

Evaluation of expressions

```javascript
let expression = Exp.compile("x+y*sin(x*2*pi())")

console.log(expression.$eval({x:1,y:1})) 
//0.9999999999999998

console.log(expression.$eval([1,1])) 
//0.9999999999999998

console.log(Exp.$eval("x+y*sin(x*2*pi())",{x:1,y:1})) 
//0.9999999999999998

console.log(expression.print());
//"x+y*sin(x*2*3.141592653589793)"

console.log(expression.differentiate("x").simplify().print()); 
//1+y*6.283185307179586*cos(x*2*3.141592653589793)

Exp.defineFunction("customFunction",(x,y,z)=>x*y*z+x);
console.log(Exp.$eval("customFunction(2,3,4)")); 
//26

console.log(Exp.functionNames())
//["sin", "cos", "tan", "cot", "asin", "acos", "atan", "acot", "sinh", "cosh", "tanh", "coth", "asinh", "acosh", "atanh", "acoth", "erf", "exp", "pow", "ln", "log", "lg", "sqrt", "abs", "min", "max", "lerp", "clamp", "saturate", "sign", "step", "frac", "floor", "round", "ceil", "smoothstep", "e", "pi", "sinc", "squarewave", "customFunction"]

try{
    let expression = Exp.compile("x+y",["x"]).$eval({x:1}); 
}catch(e){
    console.log(e.messages)
}
//["Unexpected variable "y" at compileExpression()"]
```