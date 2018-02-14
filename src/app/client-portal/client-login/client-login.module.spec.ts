import { ClientLoginModule } from './client-login.module';

describe('ClientLoginModule', () => {
  let clientLoginModule: ClientLoginModule;

  beforeEach(() => {
    clientLoginModule = new ClientLoginModule();
  });

  it('should create an instance', () => {
    expect(clientLoginModule).toBeTruthy();
  });
});
