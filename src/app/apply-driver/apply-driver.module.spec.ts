import { ApplyDriverModule } from './apply-driver.module';

describe('ApplyDriverModule', () => {
  let applyDriverModule: ApplyDriverModule;

  beforeEach(() => {
    applyDriverModule = new ApplyDriverModule();
  });

  it('should create an instance', () => {
    expect(applyDriverModule).toBeTruthy();
  });
});
