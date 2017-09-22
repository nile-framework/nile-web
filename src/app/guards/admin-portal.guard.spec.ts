import { TestBed, async, inject } from '@angular/core/testing';

import { AdminPortalGuard } from './admin-portal.guard';

describe('AdminPortalGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminPortalGuard]
    });
  });

  it('should ...', inject([AdminPortalGuard], (guard: AdminPortalGuard) => {
    expect(guard).toBeTruthy();
  }));
});
