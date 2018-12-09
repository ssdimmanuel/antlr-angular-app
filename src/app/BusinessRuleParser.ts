// Generated from ./src/antlr/BusinessRule.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { BusinessRuleListener } from "./BusinessRuleListener";
import { BusinessRuleVisitor } from "./BusinessRuleVisitor";


export class BusinessRuleParser extends Parser {
	public static readonly TRUE = 1;
	public static readonly FALSE = 2;
	public static readonly STRING = 3;
	public static readonly LEFTPAREN = 4;
	public static readonly RIGHTPAREN = 5;
	public static readonly EQUAL = 6;
	public static readonly LT = 7;
	public static readonly GT = 8;
	public static readonly LTE = 9;
	public static readonly GTE = 10;
	public static readonly NE = 11;
	public static readonly AND = 12;
	public static readonly OR = 13;
	public static readonly VARIABLE = 14;
	public static readonly NUMBER = 15;
	public static readonly SPACE = 16;
	public static readonly RULE_parse = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_binop = 2;
	public static readonly RULE_compop = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "expr", "binop", "compop",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TRUE", "FALSE", "STRING", "LEFTPAREN", "RIGHTPAREN", "EQUAL", 
		"LT", "GT", "LTE", "GTE", "NE", "AND", "OR", "VARIABLE", "NUMBER", "SPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BusinessRuleParser._LITERAL_NAMES, BusinessRuleParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BusinessRuleParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BusinessRule.g4"; }

	// @Override
	public get ruleNames(): string[] { return BusinessRuleParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BusinessRuleParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BusinessRuleParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BusinessRuleParser.RULE_parse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			this.expr(0);
			this.state = 9;
			this.match(BusinessRuleParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, BusinessRuleParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				_localctx = new VariableExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 12;
				(_localctx as VariableExpressionContext)._lhs = this.match(BusinessRuleParser.VARIABLE);
				this.state = 13;
				this.compop();
				this.state = 14;
				(_localctx as VariableExpressionContext)._rhs = this.match(BusinessRuleParser.VARIABLE);
				}
				break;

			case 2:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 16;
				(_localctx as StringExpressionContext)._lhs = this.match(BusinessRuleParser.VARIABLE);
				this.state = 17;
				this.compop();
				this.state = 18;
				(_localctx as StringExpressionContext)._rhs = this.match(BusinessRuleParser.STRING);
				}
				break;

			case 3:
				{
				_localctx = new NumberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 20;
				(_localctx as NumberExpressionContext)._lhs = this.match(BusinessRuleParser.VARIABLE);
				this.state = 21;
				this.compop();
				this.state = 22;
				(_localctx as NumberExpressionContext)._rhs = this.match(BusinessRuleParser.NUMBER);
				}
				break;

			case 4:
				{
				_localctx = new BooleanTrueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 24;
				this.match(BusinessRuleParser.TRUE);
				}
				break;

			case 5:
				{
				_localctx = new BooleanFalseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 25;
				this.match(BusinessRuleParser.FALSE);
				}
				break;

			case 6:
				{
				_localctx = new BooleanVariableContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 26;
				this.match(BusinessRuleParser.VARIABLE);
				}
				break;

			case 7:
				{
				_localctx = new EnclosedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 27;
				this.match(BusinessRuleParser.LEFTPAREN);
				this.state = 28;
				this.expr(0);
				this.state = 29;
				this.match(BusinessRuleParser.RIGHTPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 39;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalExpressionContext(new ExprContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, BusinessRuleParser.RULE_expr);
					this.state = 33;
					if (!(this.precpred(this._ctx, 8))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
					}
					this.state = 34;
					this.binop();
					this.state = 35;
					this.expr(9);
					}
					}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binop(): BinopContext {
		let _localctx: BinopContext = new BinopContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BusinessRuleParser.RULE_binop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			_la = this._input.LA(1);
			if (!(_la === BusinessRuleParser.AND || _la === BusinessRuleParser.OR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compop(): CompopContext {
		let _localctx: CompopContext = new CompopContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BusinessRuleParser.RULE_compop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BusinessRuleParser.EQUAL) | (1 << BusinessRuleParser.LT) | (1 << BusinessRuleParser.GT) | (1 << BusinessRuleParser.LTE) | (1 << BusinessRuleParser.GTE) | (1 << BusinessRuleParser.NE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x121\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03\"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"(\n\x03\f\x03\x0E\x03+\v\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x02" +
		"\x02\x03\x04\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x04\x03\x02\x0E\x0F" +
		"\x03\x02\b\r3\x02\n\x03\x02\x02\x02\x04!\x03\x02\x02\x02\x06,\x03\x02" +
		"\x02\x02\b.\x03\x02\x02\x02\n\v\x05\x04\x03\x02\v\f\x07\x02\x02\x03\f" +
		"\x03\x03\x02\x02\x02\r\x0E\b\x03\x01\x02\x0E\x0F\x07\x10\x02\x02\x0F\x10" +
		"\x05\b\x05\x02\x10\x11\x07\x10\x02\x02\x11\"\x03\x02\x02\x02\x12\x13\x07" +
		"\x10\x02\x02\x13\x14\x05\b\x05\x02\x14\x15\x07\x05\x02\x02\x15\"\x03\x02" +
		"\x02\x02\x16\x17\x07\x10\x02\x02\x17\x18\x05\b\x05\x02\x18\x19\x07\x11" +
		"\x02\x02\x19\"\x03\x02\x02\x02\x1A\"\x07\x03\x02\x02\x1B\"\x07\x04\x02" +
		"\x02\x1C\"\x07\x10\x02\x02\x1D\x1E\x07\x06\x02\x02\x1E\x1F\x05\x04\x03" +
		"\x02\x1F \x07\x07\x02\x02 \"\x03\x02\x02\x02!\r\x03\x02\x02\x02!\x12\x03" +
		"\x02\x02\x02!\x16\x03\x02\x02\x02!\x1A\x03\x02\x02\x02!\x1B\x03\x02\x02" +
		"\x02!\x1C\x03\x02\x02\x02!\x1D\x03\x02\x02\x02\")\x03\x02\x02\x02#$\f" +
		"\n\x02\x02$%\x05\x06\x04\x02%&\x05\x04\x03\v&(\x03\x02\x02\x02\'#\x03" +
		"\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*\x05" +
		"\x03\x02\x02\x02+)\x03\x02\x02\x02,-\t\x02\x02\x02-\x07\x03\x02\x02\x02" +
		"./\t\x03\x02\x02/\t\x03\x02\x02\x02\x04!)";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BusinessRuleParser.__ATN) {
			BusinessRuleParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BusinessRuleParser._serializedATN));
		}

		return BusinessRuleParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public EOF(): TerminalNode { return this.getToken(BusinessRuleParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BusinessRuleParser.RULE_parse; }
	// @Override
	public enterRule(listener: BusinessRuleListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: BusinessRuleListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BusinessRuleVisitor<Result>): Result {
		if (visitor.visitParse) {
			return visitor.visitParse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BusinessRuleParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class StringExpressionContext extends ExprContext {
	public _lhs: Token;
	public _rhs: Token;
	public compop(): CompopContext {
		return this.getRuleContext(0, CompopContext);
	}
	public VARIABLE(): TerminalNode { return this.getToken(BusinessRuleParser.VARIABLE, 0); }
	public STRING(): TerminalNode { return this.getToken(BusinessRuleParser.STRING, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BusinessRuleListener): void {
		if (listener.enterStringExpression) {
			listener.enterStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: BusinessRuleListener): void {
		if (listener.exitStringExpression) {
			listener.exitStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BusinessRuleVisitor<Result>): Result {
		if (visitor.visitStringExpression) {
			return visitor.visitStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberExpressionContext extends ExprContext {
	public _lhs: Token;
	public _rhs: Token;
	public compop(): CompopContext {
		return this.getRuleContext(0, CompopContext);
	}
	public VARIABLE(): TerminalNode { return this.getToken(BusinessRuleParser.VARIABLE, 0); }
	public NUMBER(): TerminalNode { return this.getToken(BusinessRuleParser.NUMBER, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BusinessRuleListener): void {
		if (listener.enterNumberExpression) {
			listener.enterNumberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: BusinessRuleListener): void {
		if (listener.exitNumberExpression) {
			listener.exitNumberExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BusinessRuleVisitor<Result>): Result {
		if (visitor.visitNumberExpression) {
			return visitor.visitNumberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanTrueContext extends ExprContext {
	public TRUE(): TerminalNode { return this.getToken(BusinessRuleParser.TRUE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BusinessRuleListener): void {
		if (listener.enterBooleanTrue) {
			listener.enterBooleanTrue(this);
		}
	}
	// @Override
	public exitRule(listener: BusinessRuleListener): void {
		if (listener.exitBooleanTrue) {
			listener.exitBooleanTrue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BusinessRuleVisitor<Result>): Result {
		if (visitor.visitBooleanTrue) {
			return visitor.visitBooleanTrue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnclosedExpressionContext extends ExprContext {
	public LEFTPAREN(): TerminalNode { return this.getToken(BusinessRuleParser.LEFTPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RIGHTPAREN(): TerminalNode { return this.getToken(BusinessRuleParser.RIGHTPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BusinessRuleListener): void {
		if (listener.enterEnclosedExpression) {
			listener.enterEnclosedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: BusinessRuleListener): void {
		if (listener.exitEnclosedExpression) {
			listener.exitEnclosedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BusinessRuleVisitor<Result>): Result {
		if (visitor.visitEnclosedExpression) {
			return visitor.visitEnclosedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanFalseContext extends ExprContext {
	public FALSE(): TerminalNode { return this.getToken(BusinessRuleParser.FALSE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BusinessRuleListener): void {
		if (listener.enterBooleanFalse) {
			listener.enterBooleanFalse(this);
		}
	}
	// @Override
	public exitRule(listener: BusinessRuleListener): void {
		if (listener.exitBooleanFalse) {
			listener.exitBooleanFalse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BusinessRuleVisitor<Result>): Result {
		if (visitor.visitBooleanFalse) {
			return visitor.visitBooleanFalse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanVariableContext extends ExprContext {
	public VARIABLE(): TerminalNode { return this.getToken(BusinessRuleParser.VARIABLE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BusinessRuleListener): void {
		if (listener.enterBooleanVariable) {
			listener.enterBooleanVariable(this);
		}
	}
	// @Override
	public exitRule(listener: BusinessRuleListener): void {
		if (listener.exitBooleanVariable) {
			listener.exitBooleanVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BusinessRuleVisitor<Result>): Result {
		if (visitor.visitBooleanVariable) {
			return visitor.visitBooleanVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalExpressionContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binop(): BinopContext {
		return this.getRuleContext(0, BinopContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BusinessRuleListener): void {
		if (listener.enterLogicalExpression) {
			listener.enterLogicalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: BusinessRuleListener): void {
		if (listener.exitLogicalExpression) {
			listener.exitLogicalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BusinessRuleVisitor<Result>): Result {
		if (visitor.visitLogicalExpression) {
			return visitor.visitLogicalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableExpressionContext extends ExprContext {
	public _lhs: Token;
	public _rhs: Token;
	public compop(): CompopContext {
		return this.getRuleContext(0, CompopContext);
	}
	public VARIABLE(): TerminalNode[];
	public VARIABLE(i: number): TerminalNode;
	public VARIABLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BusinessRuleParser.VARIABLE);
		} else {
			return this.getToken(BusinessRuleParser.VARIABLE, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: BusinessRuleListener): void {
		if (listener.enterVariableExpression) {
			listener.enterVariableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: BusinessRuleListener): void {
		if (listener.exitVariableExpression) {
			listener.exitVariableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BusinessRuleVisitor<Result>): Result {
		if (visitor.visitVariableExpression) {
			return visitor.visitVariableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinopContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(BusinessRuleParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(BusinessRuleParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BusinessRuleParser.RULE_binop; }
	// @Override
	public enterRule(listener: BusinessRuleListener): void {
		if (listener.enterBinop) {
			listener.enterBinop(this);
		}
	}
	// @Override
	public exitRule(listener: BusinessRuleListener): void {
		if (listener.exitBinop) {
			listener.exitBinop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BusinessRuleVisitor<Result>): Result {
		if (visitor.visitBinop) {
			return visitor.visitBinop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompopContext extends ParserRuleContext {
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(BusinessRuleParser.EQUAL, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(BusinessRuleParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(BusinessRuleParser.GT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(BusinessRuleParser.LTE, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(BusinessRuleParser.GTE, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(BusinessRuleParser.NE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BusinessRuleParser.RULE_compop; }
	// @Override
	public enterRule(listener: BusinessRuleListener): void {
		if (listener.enterCompop) {
			listener.enterCompop(this);
		}
	}
	// @Override
	public exitRule(listener: BusinessRuleListener): void {
		if (listener.exitCompop) {
			listener.exitCompop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: BusinessRuleVisitor<Result>): Result {
		if (visitor.visitCompop) {
			return visitor.visitCompop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


