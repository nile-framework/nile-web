import { ApLandingModule } from './ap-landing.module';

describe('ApLandingModule', () => {
  let apLandingModule: ApLandingModule;

  beforeEach(() => {
    apLandingModule = new ApLandingModule();
  });

  it('should create an instance', () => {
    expect(apLandingModule).toBeTruthy();
  });
});
