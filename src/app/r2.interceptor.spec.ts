import { TestBed } from '@angular/core/testing';

import { R2Interceptor } from './r2.interceptor';

describe('R2Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      R2Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: R2Interceptor = TestBed.inject(R2Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
