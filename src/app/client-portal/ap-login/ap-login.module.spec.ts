import { ApLoginModule } from './ap-login.module';

describe('ApLoginModule', () => {
  let apLoginModule: ApLoginModule;

  beforeEach(() => {
    apLoginModule = new ApLoginModule();
  });

  it('should create an instance', () => {
    expect(apLoginModule).toBeTruthy();
  });
});
