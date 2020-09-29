// Generated from e:\projects\evalExp\src\grammar\expGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var expGrammarVisitor = require('./expGrammarVisitor').expGrammarVisitor;

var grammarFileName = "expGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\"[\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u001d\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003%",
    "\n\u0003\f\u0003\u000e\u0003(\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004@\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004K\n\u0004\f\u0004\u000e\u0004N\u000b\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u0005S\n\u0005\f\u0005\u000e\u0005V\u000b",
    "\u0005\u0003\u0005\u0005\u0005Y\n\u0005\u0003\u0005\u0002\u0004\u0004",
    "\u0006\u0006\u0002\u0004\u0006\b\u0002\b\u0003\u0002\b\t\u0003\u0002",
    "\u0014\u0017\u0003\u0002\u0018\u0019\u0003\u0002\u0003\u0004\u0003\u0002",
    "\u000b\f\u0003\u0002\r\u000e\u0002f\u0002\n\u0003\u0002\u0002\u0002",
    "\u0004\u001c\u0003\u0002\u0002\u0002\u0006?\u0003\u0002\u0002\u0002",
    "\bX\u0003\u0002\u0002\u0002\n\u000b\t\u0002\u0002\u0002\u000b\u0003",
    "\u0003\u0002\u0002\u0002\f\r\b\u0003\u0001\u0002\r\u000e\u0007\u000f",
    "\u0002\u0002\u000e\u000f\u0005\u0004\u0003\u0002\u000f\u0010\u0007\u0010",
    "\u0002\u0002\u0010\u001d\u0003\u0002\u0002\u0002\u0011\u0012\u0007\u0007",
    "\u0002\u0002\u0012\u001d\u0005\u0004\u0003\b\u0013\u0014\u0005\u0006",
    "\u0004\u0002\u0014\u0015\t\u0003\u0002\u0002\u0015\u0016\u0005\u0006",
    "\u0004\u0002\u0016\u001d\u0003\u0002\u0002\u0002\u0017\u0018\u0005\u0006",
    "\u0004\u0002\u0018\u0019\t\u0004\u0002\u0002\u0019\u001a\u0005\u0006",
    "\u0004\u0002\u001a\u001d\u0003\u0002\u0002\u0002\u001b\u001d\t\u0005",
    "\u0002\u0002\u001c\f\u0003\u0002\u0002\u0002\u001c\u0011\u0003\u0002",
    "\u0002\u0002\u001c\u0013\u0003\u0002\u0002\u0002\u001c\u0017\u0003\u0002",
    "\u0002\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d&\u0003\u0002",
    "\u0002\u0002\u001e\u001f\f\u0005\u0002\u0002\u001f \u0007\u0006\u0002",
    "\u0002 %\u0005\u0004\u0003\u0006!\"\f\u0004\u0002\u0002\"#\u0007\u0005",
    "\u0002\u0002#%\u0005\u0004\u0003\u0005$\u001e\u0003\u0002\u0002\u0002",
    "$!\u0003\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002",
    "\u0002&\'\u0003\u0002\u0002\u0002\'\u0005\u0003\u0002\u0002\u0002(&",
    "\u0003\u0002\u0002\u0002)*\b\u0004\u0001\u0002*+\u0007\u000f\u0002\u0002",
    "+,\u0005\u0006\u0004\u0002,-\u0007\u0010\u0002\u0002-@\u0003\u0002\u0002",
    "\u0002./\u0007\n\u0002\u0002/0\u0007\u000f\u0002\u000201\u0005\b\u0005",
    "\u000212\u0007\u0010\u0002\u00022@\u0003\u0002\u0002\u000234\t\u0006",
    "\u0002\u00024@\u0005\u0006\u0004\b5@\u0007\n\u0002\u00026@\u0005\u0002",
    "\u0002\u000278\u0007\u001c\u0002\u000289\u0005\u0004\u0003\u00029:\u0007",
    "\u001f\u0002\u0002:;\u0005\u0006\u0004\u0002;<\u0007\u001b\u0002\u0002",
    "<=\u0005\u0006\u0004\u0002=>\u0007\u001d\u0002\u0002>@\u0003\u0002\u0002",
    "\u0002?)\u0003\u0002\u0002\u0002?.\u0003\u0002\u0002\u0002?3\u0003\u0002",
    "\u0002\u0002?5\u0003\u0002\u0002\u0002?6\u0003\u0002\u0002\u0002?7\u0003",
    "\u0002\u0002\u0002@L\u0003\u0002\u0002\u0002AB\f\t\u0002\u0002BC\u0007",
    "\u0013\u0002\u0002CK\u0005\u0006\u0004\tDE\f\u0007\u0002\u0002EF\t\u0007",
    "\u0002\u0002FK\u0005\u0006\u0004\bGH\f\u0006\u0002\u0002HI\t\u0006\u0002",
    "\u0002IK\u0005\u0006\u0004\u0007JA\u0003\u0002\u0002\u0002JD\u0003\u0002",
    "\u0002\u0002JG\u0003\u0002\u0002\u0002KN\u0003\u0002\u0002\u0002LJ\u0003",
    "\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002M\u0007\u0003\u0002\u0002",
    "\u0002NL\u0003\u0002\u0002\u0002OT\u0005\u0006\u0004\u0002PQ\u0007\u0012",
    "\u0002\u0002QS\u0005\u0006\u0004\u0002RP\u0003\u0002\u0002\u0002SV\u0003",
    "\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002",
    "UY\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002WY\u0003\u0002\u0002",
    "\u0002XO\u0003\u0002\u0002\u0002XW\u0003\u0002\u0002\u0002Y\t\u0003",
    "\u0002\u0002\u0002\n\u001c$&?JLTX"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'true'", "'false'", null, null, null, null, 
                     null, null, "'+'", "'-'", "'*'", "'/'", "'('", "')'", 
                     "'.'", "','", "'^'", "'<'", "'>'", "'<='", "'>='", 
                     "'!='", "'='", "';'", "':'", "'{'", "'}'", "'''", "'?'" ];

var symbolicNames = [ null, "TRUE", "FALSE", "OR", "AND", "NOT", "FLOAT", 
                      "INT", "ID", "PLUS", "MINUS", "ASTERISK", "DIVISION", 
                      "LPAREN", "RPAREN", "DOT", "COMMA", "CARET", "L", 
                      "G", "LE", "GE", "NE", "E", "SEMICOLON", "COLON", 
                      "LCRL", "RCRL", "APOSTROPHE", "QUESTIONMARK", "NEWLINE", 
                      "WHITESPACE", "COMMENT" ];

var ruleNames =  [ "number", "boolExpression", "expression", "functionArguments" ];

function expGrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

expGrammarParser.prototype = Object.create(antlr4.Parser.prototype);
expGrammarParser.prototype.constructor = expGrammarParser;

Object.defineProperty(expGrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

expGrammarParser.EOF = antlr4.Token.EOF;
expGrammarParser.TRUE = 1;
expGrammarParser.FALSE = 2;
expGrammarParser.OR = 3;
expGrammarParser.AND = 4;
expGrammarParser.NOT = 5;
expGrammarParser.FLOAT = 6;
expGrammarParser.INT = 7;
expGrammarParser.ID = 8;
expGrammarParser.PLUS = 9;
expGrammarParser.MINUS = 10;
expGrammarParser.ASTERISK = 11;
expGrammarParser.DIVISION = 12;
expGrammarParser.LPAREN = 13;
expGrammarParser.RPAREN = 14;
expGrammarParser.DOT = 15;
expGrammarParser.COMMA = 16;
expGrammarParser.CARET = 17;
expGrammarParser.L = 18;
expGrammarParser.G = 19;
expGrammarParser.LE = 20;
expGrammarParser.GE = 21;
expGrammarParser.NE = 22;
expGrammarParser.E = 23;
expGrammarParser.SEMICOLON = 24;
expGrammarParser.COLON = 25;
expGrammarParser.LCRL = 26;
expGrammarParser.RCRL = 27;
expGrammarParser.APOSTROPHE = 28;
expGrammarParser.QUESTIONMARK = 29;
expGrammarParser.NEWLINE = 30;
expGrammarParser.WHITESPACE = 31;
expGrammarParser.COMMENT = 32;

expGrammarParser.RULE_number = 0;
expGrammarParser.RULE_boolExpression = 1;
expGrammarParser.RULE_expression = 2;
expGrammarParser.RULE_functionArguments = 3;


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expGrammarParser.RULE_number;
    this.value = null; // Token
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.FLOAT = function() {
    return this.getToken(expGrammarParser.FLOAT, 0);
};

NumberContext.prototype.INT = function() {
    return this.getToken(expGrammarParser.INT, 0);
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expGrammarParser.NumberContext = NumberContext;

expGrammarParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, expGrammarParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        localctx.value = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===expGrammarParser.FLOAT || _la===expGrammarParser.INT)) {
            localctx.value = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BoolExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expGrammarParser.RULE_boolExpression;
    return this;
}

BoolExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolExpressionContext.prototype.constructor = BoolExpressionContext;


 
BoolExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function BoolConstantContext(parser, ctx) {
	BoolExpressionContext.call(this, parser);
    this.value = null; // Token;
    BoolExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolConstantContext.prototype = Object.create(BoolExpressionContext.prototype);
BoolConstantContext.prototype.constructor = BoolConstantContext;

expGrammarParser.BoolConstantContext = BoolConstantContext;

BoolConstantContext.prototype.TRUE = function() {
    return this.getToken(expGrammarParser.TRUE, 0);
};

BoolConstantContext.prototype.FALSE = function() {
    return this.getToken(expGrammarParser.FALSE, 0);
};
BoolConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitBoolConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolUnaryOperatorContext(parser, ctx) {
	BoolExpressionContext.call(this, parser);
    this.op = null; // Token;
    BoolExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolUnaryOperatorContext.prototype = Object.create(BoolExpressionContext.prototype);
BoolUnaryOperatorContext.prototype.constructor = BoolUnaryOperatorContext;

expGrammarParser.BoolUnaryOperatorContext = BoolUnaryOperatorContext;

BoolUnaryOperatorContext.prototype.boolExpression = function() {
    return this.getTypedRuleContext(BoolExpressionContext,0);
};

BoolUnaryOperatorContext.prototype.NOT = function() {
    return this.getToken(expGrammarParser.NOT, 0);
};
BoolUnaryOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitBoolUnaryOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BracketBoolExpressionContext(parser, ctx) {
	BoolExpressionContext.call(this, parser);
    BoolExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BracketBoolExpressionContext.prototype = Object.create(BoolExpressionContext.prototype);
BracketBoolExpressionContext.prototype.constructor = BracketBoolExpressionContext;

expGrammarParser.BracketBoolExpressionContext = BracketBoolExpressionContext;

BracketBoolExpressionContext.prototype.LPAREN = function() {
    return this.getToken(expGrammarParser.LPAREN, 0);
};

BracketBoolExpressionContext.prototype.boolExpression = function() {
    return this.getTypedRuleContext(BoolExpressionContext,0);
};

BracketBoolExpressionContext.prototype.RPAREN = function() {
    return this.getToken(expGrammarParser.RPAREN, 0);
};
BracketBoolExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitBracketBoolExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BBoolBinaryOperatorContext(parser, ctx) {
	BoolExpressionContext.call(this, parser);
    this.left = null; // BoolExpressionContext;
    this.op = null; // Token;
    this.right = null; // BoolExpressionContext;
    BoolExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BBoolBinaryOperatorContext.prototype = Object.create(BoolExpressionContext.prototype);
BBoolBinaryOperatorContext.prototype.constructor = BBoolBinaryOperatorContext;

expGrammarParser.BBoolBinaryOperatorContext = BBoolBinaryOperatorContext;

BBoolBinaryOperatorContext.prototype.boolExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BoolExpressionContext);
    } else {
        return this.getTypedRuleContext(BoolExpressionContext,i);
    }
};

BBoolBinaryOperatorContext.prototype.AND = function() {
    return this.getToken(expGrammarParser.AND, 0);
};

BBoolBinaryOperatorContext.prototype.OR = function() {
    return this.getToken(expGrammarParser.OR, 0);
};
BBoolBinaryOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitBBoolBinaryOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EBoolBinaryOperatorContext(parser, ctx) {
	BoolExpressionContext.call(this, parser);
    this.leftexp = null; // ExpressionContext;
    this.op = null; // Token;
    this.rightexp = null; // ExpressionContext;
    BoolExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EBoolBinaryOperatorContext.prototype = Object.create(BoolExpressionContext.prototype);
EBoolBinaryOperatorContext.prototype.constructor = EBoolBinaryOperatorContext;

expGrammarParser.EBoolBinaryOperatorContext = EBoolBinaryOperatorContext;

EBoolBinaryOperatorContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EBoolBinaryOperatorContext.prototype.L = function() {
    return this.getToken(expGrammarParser.L, 0);
};

EBoolBinaryOperatorContext.prototype.LE = function() {
    return this.getToken(expGrammarParser.LE, 0);
};

EBoolBinaryOperatorContext.prototype.G = function() {
    return this.getToken(expGrammarParser.G, 0);
};

EBoolBinaryOperatorContext.prototype.GE = function() {
    return this.getToken(expGrammarParser.GE, 0);
};

EBoolBinaryOperatorContext.prototype.E = function() {
    return this.getToken(expGrammarParser.E, 0);
};

EBoolBinaryOperatorContext.prototype.NE = function() {
    return this.getToken(expGrammarParser.NE, 0);
};
EBoolBinaryOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitEBoolBinaryOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};



expGrammarParser.prototype.boolExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BoolExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, expGrammarParser.RULE_boolExpression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new BracketBoolExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 11;
            this.match(expGrammarParser.LPAREN);
            this.state = 12;
            this.boolExpression(0);
            this.state = 13;
            this.match(expGrammarParser.RPAREN);
            break;

        case 2:
            localctx = new BoolUnaryOperatorContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 15;
            localctx.op = this.match(expGrammarParser.NOT);
            this.state = 16;
            this.boolExpression(6);
            break;

        case 3:
            localctx = new EBoolBinaryOperatorContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 17;
            localctx.leftexp = this.expression(0);
            this.state = 18;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << expGrammarParser.L) | (1 << expGrammarParser.G) | (1 << expGrammarParser.LE) | (1 << expGrammarParser.GE))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 19;
            localctx.rightexp = this.expression(0);
            break;

        case 4:
            localctx = new EBoolBinaryOperatorContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 21;
            localctx.leftexp = this.expression(0);
            this.state = 22;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===expGrammarParser.NE || _la===expGrammarParser.E)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 23;
            localctx.rightexp = this.expression(0);
            break;

        case 5:
            localctx = new BoolConstantContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 25;
            localctx.value = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===expGrammarParser.TRUE || _la===expGrammarParser.FALSE)) {
                localctx.value = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 36;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 34;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BBoolBinaryOperatorContext(this, new BoolExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, expGrammarParser.RULE_boolExpression);
                    this.state = 28;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 29;
                    localctx.op = this.match(expGrammarParser.AND);
                    this.state = 30;
                    localctx.right = this.boolExpression(4);
                    break;

                case 2:
                    localctx = new BBoolBinaryOperatorContext(this, new BoolExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, expGrammarParser.RULE_boolExpression);
                    this.state = 31;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 32;
                    localctx.op = this.match(expGrammarParser.OR);
                    this.state = 33;
                    localctx.right = this.boolExpression(3);
                    break;

                } 
            }
            this.state = 38;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expGrammarParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function BracketExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BracketExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BracketExpressionContext.prototype.constructor = BracketExpressionContext;

expGrammarParser.BracketExpressionContext = BracketExpressionContext;

BracketExpressionContext.prototype.LPAREN = function() {
    return this.getToken(expGrammarParser.LPAREN, 0);
};

BracketExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

BracketExpressionContext.prototype.RPAREN = function() {
    return this.getToken(expGrammarParser.RPAREN, 0);
};
BracketExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitBracketExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BinaryOperatorExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryOperatorExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BinaryOperatorExpressionContext.prototype.constructor = BinaryOperatorExpressionContext;

expGrammarParser.BinaryOperatorExpressionContext = BinaryOperatorExpressionContext;

BinaryOperatorExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

BinaryOperatorExpressionContext.prototype.CARET = function() {
    return this.getToken(expGrammarParser.CARET, 0);
};

BinaryOperatorExpressionContext.prototype.DIVISION = function() {
    return this.getToken(expGrammarParser.DIVISION, 0);
};

BinaryOperatorExpressionContext.prototype.ASTERISK = function() {
    return this.getToken(expGrammarParser.ASTERISK, 0);
};

BinaryOperatorExpressionContext.prototype.PLUS = function() {
    return this.getToken(expGrammarParser.PLUS, 0);
};

BinaryOperatorExpressionContext.prototype.MINUS = function() {
    return this.getToken(expGrammarParser.MINUS, 0);
};
BinaryOperatorExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitBinaryOperatorExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.func = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FunctionExpressionContext.prototype.constructor = FunctionExpressionContext;

expGrammarParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.LPAREN = function() {
    return this.getToken(expGrammarParser.LPAREN, 0);
};

FunctionExpressionContext.prototype.functionArguments = function() {
    return this.getTypedRuleContext(FunctionArgumentsContext,0);
};

FunctionExpressionContext.prototype.RPAREN = function() {
    return this.getToken(expGrammarParser.RPAREN, 0);
};

FunctionExpressionContext.prototype.ID = function() {
    return this.getToken(expGrammarParser.ID, 0);
};
FunctionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitFunctionExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryOperatorExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryOperatorExpressionContext.prototype = Object.create(ExpressionContext.prototype);
UnaryOperatorExpressionContext.prototype.constructor = UnaryOperatorExpressionContext;

expGrammarParser.UnaryOperatorExpressionContext = UnaryOperatorExpressionContext;

UnaryOperatorExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

UnaryOperatorExpressionContext.prototype.PLUS = function() {
    return this.getToken(expGrammarParser.PLUS, 0);
};

UnaryOperatorExpressionContext.prototype.MINUS = function() {
    return this.getToken(expGrammarParser.MINUS, 0);
};
UnaryOperatorExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitUnaryOperatorExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstantExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.value = null; // NumberContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ConstantExpressionContext.prototype.constructor = ConstantExpressionContext;

expGrammarParser.ConstantExpressionContext = ConstantExpressionContext;

ConstantExpressionContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
ConstantExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitConstantExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VariableExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.id = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableExpressionContext.prototype = Object.create(ExpressionContext.prototype);
VariableExpressionContext.prototype.constructor = VariableExpressionContext;

expGrammarParser.VariableExpressionContext = VariableExpressionContext;

VariableExpressionContext.prototype.ID = function() {
    return this.getToken(expGrammarParser.ID, 0);
};
VariableExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitVariableExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TernaryOperatorExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.condition = null; // BoolExpressionContext;
    this.first = null; // ExpressionContext;
    this.second = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryOperatorExpressionContext.prototype = Object.create(ExpressionContext.prototype);
TernaryOperatorExpressionContext.prototype.constructor = TernaryOperatorExpressionContext;

expGrammarParser.TernaryOperatorExpressionContext = TernaryOperatorExpressionContext;

TernaryOperatorExpressionContext.prototype.LCRL = function() {
    return this.getToken(expGrammarParser.LCRL, 0);
};

TernaryOperatorExpressionContext.prototype.QUESTIONMARK = function() {
    return this.getToken(expGrammarParser.QUESTIONMARK, 0);
};

TernaryOperatorExpressionContext.prototype.COLON = function() {
    return this.getToken(expGrammarParser.COLON, 0);
};

TernaryOperatorExpressionContext.prototype.RCRL = function() {
    return this.getToken(expGrammarParser.RCRL, 0);
};

TernaryOperatorExpressionContext.prototype.boolExpression = function() {
    return this.getTypedRuleContext(BoolExpressionContext,0);
};

TernaryOperatorExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
TernaryOperatorExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitTernaryOperatorExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



expGrammarParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, expGrammarParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new BracketExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 40;
            this.match(expGrammarParser.LPAREN);
            this.state = 41;
            this.expression(0);
            this.state = 42;
            this.match(expGrammarParser.RPAREN);
            break;

        case 2:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 44;
            localctx.func = this.match(expGrammarParser.ID);
            this.state = 45;
            this.match(expGrammarParser.LPAREN);
            this.state = 46;
            this.functionArguments();
            this.state = 47;
            this.match(expGrammarParser.RPAREN);
            break;

        case 3:
            localctx = new UnaryOperatorExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 49;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===expGrammarParser.PLUS || _la===expGrammarParser.MINUS)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 50;
            this.expression(6);
            break;

        case 4:
            localctx = new VariableExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 51;
            localctx.id = this.match(expGrammarParser.ID);
            break;

        case 5:
            localctx = new ConstantExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 52;
            localctx.value = this.number();
            break;

        case 6:
            localctx = new TernaryOperatorExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 53;
            this.match(expGrammarParser.LCRL);
            this.state = 54;
            localctx.condition = this.boolExpression(0);
            this.state = 55;
            this.match(expGrammarParser.QUESTIONMARK);
            this.state = 56;
            localctx.first = this.expression(0);
            this.state = 57;
            this.match(expGrammarParser.COLON);
            this.state = 58;
            localctx.second = this.expression(0);
            this.state = 59;
            this.match(expGrammarParser.RCRL);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 74;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 72;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BinaryOperatorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, expGrammarParser.RULE_expression);
                    this.state = 63;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 64;
                    localctx.op = this.match(expGrammarParser.CARET);
                    this.state = 65;
                    localctx.right = this.expression(7);
                    break;

                case 2:
                    localctx = new BinaryOperatorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, expGrammarParser.RULE_expression);
                    this.state = 66;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 67;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===expGrammarParser.ASTERISK || _la===expGrammarParser.DIVISION)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 68;
                    localctx.right = this.expression(6);
                    break;

                case 3:
                    localctx = new BinaryOperatorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, expGrammarParser.RULE_expression);
                    this.state = 69;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 70;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===expGrammarParser.PLUS || _la===expGrammarParser.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 71;
                    localctx.right = this.expression(5);
                    break;

                } 
            }
            this.state = 76;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function FunctionArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = expGrammarParser.RULE_functionArguments;
    return this;
}

FunctionArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionArgumentsContext.prototype.constructor = FunctionArgumentsContext;

FunctionArgumentsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

FunctionArgumentsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(expGrammarParser.COMMA);
    } else {
        return this.getToken(expGrammarParser.COMMA, i);
    }
};


FunctionArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof expGrammarVisitor ) {
        return visitor.visitFunctionArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




expGrammarParser.FunctionArgumentsContext = FunctionArgumentsContext;

expGrammarParser.prototype.functionArguments = function() {

    var localctx = new FunctionArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, expGrammarParser.RULE_functionArguments);
    var _la = 0; // Token type
    try {
        this.state = 86;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case expGrammarParser.FLOAT:
        case expGrammarParser.INT:
        case expGrammarParser.ID:
        case expGrammarParser.PLUS:
        case expGrammarParser.MINUS:
        case expGrammarParser.LPAREN:
        case expGrammarParser.LCRL:
            this.enterOuterAlt(localctx, 1);
            this.state = 77;
            this.expression(0);
            this.state = 82;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===expGrammarParser.COMMA) {
                this.state = 78;
                this.match(expGrammarParser.COMMA);
                this.state = 79;
                this.expression(0);
                this.state = 84;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case expGrammarParser.RPAREN:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


expGrammarParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.boolExpression_sempred(localctx, predIndex);
	case 2:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

expGrammarParser.prototype.boolExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

expGrammarParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.expGrammarParser = expGrammarParser;
