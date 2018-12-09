// Generated from ./src/antlr/BusinessRule.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StringExpressionContext } from "./BusinessRuleParser";
import { NumberExpressionContext } from "./BusinessRuleParser";
import { BooleanTrueContext } from "./BusinessRuleParser";
import { EnclosedExpressionContext } from "./BusinessRuleParser";
import { BooleanFalseContext } from "./BusinessRuleParser";
import { BooleanVariableContext } from "./BusinessRuleParser";
import { LogicalExpressionContext } from "./BusinessRuleParser";
import { VariableExpressionContext } from "./BusinessRuleParser";
import { ParseContext } from "./BusinessRuleParser";
import { ExprContext } from "./BusinessRuleParser";
import { BinopContext } from "./BusinessRuleParser";
import { CompopContext } from "./BusinessRuleParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BusinessRuleParser`.
 */
export interface BusinessRuleListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `stringExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	enterStringExpression?: (ctx: StringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `stringExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	exitStringExpression?: (ctx: StringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `numberExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNumberExpression?: (ctx: NumberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `numberExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNumberExpression?: (ctx: NumberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanTrue`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBooleanTrue?: (ctx: BooleanTrueContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanTrue`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBooleanTrue?: (ctx: BooleanTrueContext) => void;

	/**
	 * Enter a parse tree produced by the `enclosedExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	enterEnclosedExpression?: (ctx: EnclosedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `enclosedExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	exitEnclosedExpression?: (ctx: EnclosedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanFalse`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBooleanFalse?: (ctx: BooleanFalseContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanFalse`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBooleanFalse?: (ctx: BooleanFalseContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanVariable`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBooleanVariable?: (ctx: BooleanVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanVariable`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBooleanVariable?: (ctx: BooleanVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `variableExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	enterVariableExpression?: (ctx: VariableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `variableExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	exitVariableExpression?: (ctx: VariableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `BusinessRuleParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `BusinessRuleParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `BusinessRuleParser.binop`.
	 * @param ctx the parse tree
	 */
	enterBinop?: (ctx: BinopContext) => void;
	/**
	 * Exit a parse tree produced by `BusinessRuleParser.binop`.
	 * @param ctx the parse tree
	 */
	exitBinop?: (ctx: BinopContext) => void;

	/**
	 * Enter a parse tree produced by `BusinessRuleParser.compop`.
	 * @param ctx the parse tree
	 */
	enterCompop?: (ctx: CompopContext) => void;
	/**
	 * Exit a parse tree produced by `BusinessRuleParser.compop`.
	 * @param ctx the parse tree
	 */
	exitCompop?: (ctx: CompopContext) => void;
}

