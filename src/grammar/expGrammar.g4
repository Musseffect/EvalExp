grammar expGrammar;

number		: value=(FLOAT|INT);


boolExpression: LPAREN boolExpression RPAREN #BracketBoolExpression
    | <assoc=right> op = NOT boolExpression #BoolUnaryOperator
    | leftexp = expression op = (L|LE|G|GE) rightexp = expression #EBoolBinaryOperator
    | leftexp = expression op = (E|NE) rightexp = expression #EBoolBinaryOperator
    | left = boolExpression op = AND right = boolExpression #BBoolBinaryOperator
    | left = boolExpression op = OR right = boolExpression #BBoolBinaryOperator
	| value = (TRUE|FALSE) #BoolConstant
    ;

expression: LPAREN expression RPAREN #BracketExpression
	| func=ID LPAREN functionArguments RPAREN	#FunctionExpression
	| <assoc=right> left=expression op=CARET right=expression #BinaryOperatorExpression
	| op=(PLUS | MINUS) expression	#UnaryOperatorExpression
	| left=expression op=(DIVISION|ASTERISK) right=expression #BinaryOperatorExpression
	| left=expression op=(PLUS|MINUS) right=expression	#BinaryOperatorExpression
	| id=ID #VariableExpression 
	| value=number	#ConstantExpression
	| LCRL condition=boolExpression QUESTIONMARK first=expression COLON second=expression RCRL #TernaryOperatorExpression
	;

functionArguments: expression (COMMA expression)* | ;


fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;
fragment DIGIT: [0-9] ;

TRUE: 'true';
FALSE: 'false';
OR                  : '||'| 'or' ;
AND                 : '&&'| 'and' ;
NOT                 : '!'| 'not' ;

FLOAT: (DIGIT+ DOT DIGIT*) ([Ee][+-]? DIGIT+)?
	   |DOT DIGIT+ ([Ee][+-]? DIGIT+)?
		|DIGIT+ ([Ee] [+-]? DIGIT+)
		;
INT: DIGIT+ ; 
ID: [_A-Za-z][A-Za-z0-9_]*;

PLUS               : '+' ;
MINUS              : '-' ;
ASTERISK           : '*' ;
DIVISION           : '/' ;
LPAREN             : '(' ;
RPAREN				: ')';
DOT					: '.';
COMMA				: ',' ;
CARET				: '^' ;
L                   : '<' ;
G                   : '>' ;
LE                  : '<=' ;
GE                  : '>=' ;
NE                  : '!=' ;
E                   : '=' ;
SEMICOLON			: ';' ;
COLON				: ':' ;
LCRL			    : '{' ;
RCRL			    : '}' ;
APOSTROPHE			: '\'' ;
QUESTIONMARK		: '?' ;


NEWLINE	: ('\r'? '\n' | '\r')+ -> skip;
WHITESPACE : (' ' | '\t')+ -> skip ;
COMMENT 
	:	( '//' ~[\r\n]* ('\r'? '\n' | 'r')
		| '/*' .*? '*/'
		) -> skip
	;