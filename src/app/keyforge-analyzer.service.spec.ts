import { TestBed } from '@angular/core/testing';

import { KeyforgeAnalyzerService } from './keyforge-analyzer.service';

describe('KeyforgeAnalyzerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyforgeAnalyzerService = TestBed.get(KeyforgeAnalyzerService);
    expect(service).toBeTruthy();
  });
});
