import { ClientLoginCoreModule } from './client-login-core.module';

describe('ClientLoginCoreModule', () => {
  let clientLoginCoreModule: ClientLoginCoreModule;

  beforeEach(() => {
    clientLoginCoreModule = new ClientLoginCoreModule();
  });

  it('should create an instance', () => {
    expect(clientLoginCoreModule).toBeTruthy();
  });
});
