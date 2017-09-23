import { ApIndustriesModule } from './ap-industries.module';

describe('ApIndustriesModule', () => {
  let apIndustriesModule: ApIndustriesModule;

  beforeEach(() => {
    apIndustriesModule = new ApIndustriesModule();
  });

  it('should create an instance', () => {
    expect(apIndustriesModule).toBeTruthy();
  });
});
