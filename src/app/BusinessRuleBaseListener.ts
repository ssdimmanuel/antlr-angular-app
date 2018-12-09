
import { BusinessRuleListener } from './BusinessRuleListener';
import { ExprContext, NumberExpressionContext } from './BusinessRuleParser';


export class BusinessRuleBaseListener implements BusinessRuleListener {

    count: number;
    constructor() {
        this.count = 0;
    }
enterBinop() {}
enterBooleanFalse() {}
 // enterBooleanTrue() {}
enterBooleanVariable() {}
enterCompop() {}
enterEnclosedExpression() {}
enterEveryRule() {}
enterLogicalExpression() {}
enterParse() {}
enterStringExpression() {}
enterVariableExpression() {}
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
        console.log(ctx);
        this.count++;
    }

    getCount(): number {
        return this.count;
    }

}
