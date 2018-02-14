import { ApDriversModule } from './ap-drivers.module';

describe('ApDriversModule', () => {
  let apDriversModule: ApDriversModule;

  beforeEach(() => {
    apDriversModule = new ApDriversModule();
  });

  it('should create an instance', () => {
    expect(apDriversModule).toBeTruthy();
  });
});
