import { BusinessRuleListener } from "src/lib/BusinessRuleListener";
import { ExprContext, NumberExpressionContext } from "src/lib/BusinessRuleParser";


export class ExpressionCollector implements BusinessRuleListener {

    count: number;
    expressions: Array<string>
    constructor() {
        this.count = 0;
        this.expressions = new Array()
    }


    getExpressions(){
        return this.expressions
    }
    enterBinop() { }
    enterBooleanFalse() { }
    // enterBooleanTrue() {}
    enterBooleanVariable() { this.count++; }
    enterCompop() { }
    enterEnclosedExpression() { }
    enterEveryRule() { }
    enterLogicalExpression() { }
    enterParse() { }
    enterStringExpression(ctx) { 
        this.count++; 
        this.expressions.push(ctx.text)
    }
    enterVariableExpression(ctx) { 
        this.count++; 
        this.expressions.push(ctx.text)
    }
    exitNumberExpression() { }
    exitBinop() { }
    exitStringExpression() { }
    exitBooleanFalse() { }
    exitBooleanTrue() { }
    exitBooleanVariable() { }
    exitEnclosedExpression() { }
    enterExpr(ctx: ExprContext) {
        
    }

    enterNumberExpression(ctx: NumberExpressionContext) {
        // console.log(this.count);
        console.log(ctx.text);
        this.expressions.push(ctx.text)
        this.count++;
    }

    getCount(): number {
        return this.count;
    }

}
