// Generated from e:\projects\evalExp\src\grammar\expGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by expGrammarParser.

function expGrammarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

expGrammarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
expGrammarVisitor.prototype.constructor = expGrammarVisitor;

// Visit a parse tree produced by expGrammarParser#number.
expGrammarVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#BoolConstant.
expGrammarVisitor.prototype.visitBoolConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#BoolUnaryOperator.
expGrammarVisitor.prototype.visitBoolUnaryOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#BracketBoolExpression.
expGrammarVisitor.prototype.visitBracketBoolExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#BBoolBinaryOperator.
expGrammarVisitor.prototype.visitBBoolBinaryOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#EBoolBinaryOperator.
expGrammarVisitor.prototype.visitEBoolBinaryOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#BracketExpression.
expGrammarVisitor.prototype.visitBracketExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#BinaryOperatorExpression.
expGrammarVisitor.prototype.visitBinaryOperatorExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#FunctionExpression.
expGrammarVisitor.prototype.visitFunctionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#UnaryOperatorExpression.
expGrammarVisitor.prototype.visitUnaryOperatorExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#ConstantExpression.
expGrammarVisitor.prototype.visitConstantExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#VariableExpression.
expGrammarVisitor.prototype.visitVariableExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#TernaryOperatorExpression.
expGrammarVisitor.prototype.visitTernaryOperatorExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by expGrammarParser#functionArguments.
expGrammarVisitor.prototype.visitFunctionArguments = function(ctx) {
  return this.visitChildren(ctx);
};



exports.expGrammarVisitor = expGrammarVisitor;