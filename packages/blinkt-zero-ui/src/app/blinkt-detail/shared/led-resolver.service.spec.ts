import { TestBed } from '@angular/core/testing';

import { LedResolverService } from './led-resolver.service';

describe('LedResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LedResolverService = TestBed.get(LedResolverService);
    expect(service).toBeTruthy();
  });
});
