import { $eval, compile, compileBool, defineFunction } from ".";

let x = 2;
let result = Math.sin(x)*x+Math.sinh(x)/Math.pow(x,3);
test('compiler + eval of sin(x)*x+sinh(x)/x^3 with eval array',()=>{
    expect(compile("sin(x)*x+sinh(x)/x^3",["x"]).$eval([2])).toBeCloseTo(result)
});
test('compiler + eval of sin(x)*x+sinh(x)/x^3 with eval dictionary',()=>{
    expect(compile("sin(x)*x+sinh(x)/x^3").$eval({x:2})).toBeCloseTo(result)
});

//TODO add randomized expressions
test('bool compiler + eval of x<3&& x>5',()=>{
    expect(compileBool("x<3&&x>5").$eval([2])).toBeFalsy()
});
test('bool compiler + eval of x<3&& x>5',()=>{
    expect(compileBool("x<3&&x>0").$eval({x:2})).toBeTruthy()
});
test('eval test',()=>{
    expect($eval("x*x+x-2",{x:2})).toBeCloseTo(4)
});
defineFunction("customFunc",(x)=>{return x*x+x-2});
test('functionDefinition test',()=>{
    expect($eval('customFunc(x)',{x:2})).toBeCloseTo(4)
});
defineFunction("customFunc2",(x,y)=>{return x*x+y-2});
test('functionDefinition test 2',()=>{
    expect($eval('customFunc2(x,y)',{x:2,y:2})).toBeCloseTo(4)
});