// Generated from ./src/antlr/BusinessRule.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BusinessRuleParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface BusinessRuleVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `stringExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanTrue`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanTrue?: (ctx: BooleanTrueContext) => Result;

	/**
	 * Visit a parse tree produced by the `enclosedExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnclosedExpression?: (ctx: EnclosedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanFalse`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanFalse?: (ctx: BooleanFalseContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanVariable`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanVariable?: (ctx: BooleanVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableExpression`
	 * labeled alternative in `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableExpression?: (ctx: VariableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `BusinessRuleParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `BusinessRuleParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `BusinessRuleParser.binop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinop?: (ctx: BinopContext) => Result;

	/**
	 * Visit a parse tree produced by `BusinessRuleParser.compop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompop?: (ctx: CompopContext) => Result;
}

