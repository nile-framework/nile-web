import { AdminPortalModule } from './admin-portal.module';

describe('AdminPortalModule', () => {
  let adminPortalModule: AdminPortalModule;

  beforeEach(() => {
    adminPortalModule = new AdminPortalModule();
  });

  it('should create an instance', () => {
    expect(adminPortalModule).toBeTruthy();
  });
});
