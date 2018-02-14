import { ApplyClientModule } from './apply-client.module';

describe('ApplyClientModule', () => {
  let applyClientModule: ApplyClientModule;

  beforeEach(() => {
    applyClientModule = new ApplyClientModule();
  });

  it('should create an instance', () => {
    expect(applyClientModule).toBeTruthy();
  });
});
