import { ApplyDriverCoreModule } from './apply-driver-core.module';

describe('ApplyDriverCoreModule', () => {
  let applyDriverCoreModule: ApplyDriverCoreModule;

  beforeEach(() => {
    applyDriverCoreModule = new ApplyDriverCoreModule();
  });

  it('should create an instance', () => {
    expect(applyDriverCoreModule).toBeTruthy();
  });
});
