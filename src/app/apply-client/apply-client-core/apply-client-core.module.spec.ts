import { ApplyClientCoreModule } from './apply-client-core.module';

describe('ApplyClientCoreModule', () => {
  let applyClientCoreModule: ApplyClientCoreModule;

  beforeEach(() => {
    applyClientCoreModule = new ApplyClientCoreModule();
  });

  it('should create an instance', () => {
    expect(applyClientCoreModule).toBeTruthy();
  });
});
