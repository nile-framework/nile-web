import { TestBed, async, inject } from '@angular/core/testing';

import { clientGuard } from './client.guard';

describe('clientGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [clientGuard]
    });
  });

  it('should ...', inject([clientGuard], (guard: clientGuard) => {
    expect(guard).toBeTruthy();
  }));
});
