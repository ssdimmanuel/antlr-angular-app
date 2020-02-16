import { Injectable } from '@angular/core';
import { BusinessRuleListener } from 'src/lib/BusinessRuleListener';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { BusinessRuleLexer } from 'src/lib/BusinessRuleLexer';
import { BusinessRuleParser } from 'src/lib/BusinessRuleParser';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

@Injectable({
  providedIn: 'root'
})
export class RuleParseService {

  constructor() { }

  public parse(rule: string, listener: BusinessRuleListener){

    let inputStream = new ANTLRInputStream(rule);
    let lexer = new BusinessRuleLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new BusinessRuleParser(tokenStream);
    let tree = parser.parse();

    ParseTreeWalker.DEFAULT.walk(listener, tree);

  }
}
