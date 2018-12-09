
import { BusinessRuleListener } from './BusinessRuleListener';
import { ExprContext, NumberExpressionContext } from './BusinessRuleParser';


export class ExpressionCounter implements BusinessRuleListener {

    count: number;
    constructor() {
        this.count = 0;
    }
enterBinop() {}
enterBooleanFalse() {}
 // enterBooleanTrue() {}
enterBooleanVariable() { this.count++; }
enterCompop() {}
enterEnclosedExpression() {}
enterEveryRule() {}
enterLogicalExpression() {}
enterParse() {}
enterStringExpression() { this.count++; }
enterVariableExpression() { this.count++; }
exitNumberExpression() {}
exitBinop() {}
exitStringExpression() {}
exitBooleanFalse() {}
exitBooleanTrue() {}
exitBooleanVariable() {}
exitEnclosedExpression() {}
    enterExpr(ctx: ExprContext) {
    }

    enterNumberExpression(ctx: NumberExpressionContext) {
       // console.log(this.count);
       console.log(ctx.text);
        this.count++;
    }

    getCount(): number {
        return this.count;
    }

}
