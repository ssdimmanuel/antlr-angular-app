import { TestBed } from '@angular/core/testing';

import { RuleParseService } from './rule-parse.service';

describe('RuleParseService', () => {
  let service: RuleParseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuleParseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
