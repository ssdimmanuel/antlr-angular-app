import { Component } from '@angular/core';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { ExpressionCounter } from './expr.counter';
import { BusinessRuleLexer } from 'src/lib/BusinessRuleLexer';
import { BusinessRuleParser, ParseContext } from 'src/lib/BusinessRuleParser';
import { ExpressionCollector } from './expr.collector';
import { RuleParseService } from './services/rule-parse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANTLR Typescript Demo';

  expc: number;
  rulefield: string;
  tokenStream: CommonTokenStream;
  lexer: BusinessRuleLexer;
  parser: BusinessRuleParser;
  tree: ParseContext;
  inputStream: ANTLRInputStream;
  ec: ExpressionCounter;
  exprs: Array<string>

  constructor(private parseService: RuleParseService) {
    this.rulefield = 'a = 10 & b = 5';
  }

  public parse() {
    this.inputStream = new ANTLRInputStream(this.rulefield);
    this.lexer = new BusinessRuleLexer(this.inputStream);
    this.tokenStream = new CommonTokenStream(this.lexer);
    this.parser = new BusinessRuleParser(this.tokenStream);
    this.tree = this.parser.parse();

    this.ec = new ExpressionCounter();

    ParseTreeWalker.DEFAULT.walk(this.ec, this.tree);

    let exp = new ExpressionCollector()

    this.parseService.parse(this.rulefield, exp)

    this.exprs = exp.getExpressions()

    // this.rulefield += this.ec.getCount();
    this.expc = this.ec.getCount();
    // console.log(this.tree);
    console.log(this.ec.getCount());
    console.log(this.exprs)
  }
}
