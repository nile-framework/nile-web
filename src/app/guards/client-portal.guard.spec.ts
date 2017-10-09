import { TestBed, async, inject } from '@angular/core/testing';

import { ClientPortalGuard } from './client-portal.guard';

describe('ClientPortalGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientPortalGuard]
    });
  });

  it('should ...', inject([ClientPortalGuard], (guard: ClientPortalGuard) => {
    expect(guard).toBeTruthy();
  }));
});
