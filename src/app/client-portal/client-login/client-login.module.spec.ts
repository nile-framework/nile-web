import { ClientLoginModule } from './client-login.module';

describe('ApVendorsModule', () => {
  let clientLoginModule: ClientLoginModule;

  beforeEach(() => {
    clientLoginModule = new ClientLoginModule();
  });

  it('should create an instance', () => {
    expect(clientLoginModule).toBeTruthy();
  });
});
