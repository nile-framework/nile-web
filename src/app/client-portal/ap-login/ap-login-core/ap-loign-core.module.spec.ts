import { ApLoginCoreModule } from './ap-login-core.module';

describe('ApplyClientCoreModule', () => {
  let apLoginCoreModule: ApLoginCoreModule;

  beforeEach(() => {
    apLoginCoreModule = new ApLoginCoreModule();
  });

  it('should create an instance', () => {
    expect(apLoginCoreModule).toBeTruthy();
  });
});
