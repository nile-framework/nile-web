import { ApHomeModule } from './ap-home.module';

describe('ApHomeModule', () => {
  let apHomeModule: ApHomeModule;

  beforeEach(() => {
    apHomeModule = new ApHomeModule();
  });

  it('should create an instance', () => {
    expect(apHomeModule).toBeTruthy();
  });
});
