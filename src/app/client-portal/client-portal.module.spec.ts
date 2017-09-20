import { ClientPortalModule } from './client-portal.module';

describe('ClientPortalModule', () => {
  let clientPortalModule: ClientPortalModule;

  beforeEach(() => {
    clientPortalModule = new ClientPortalModule();
  });

  it('should create an instance', () => {
    expect(clientPortalModule).toBeTruthy();
  });
});
