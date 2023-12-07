import { TestBed } from '@angular/core/testing';

import { R1Interceptor } from './r1.interceptor';

describe('R1Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      R1Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: R1Interceptor = TestBed.inject(R1Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
