import { ApCitiesModule } from './ap-cities.module';

describe('ApCitiesModule', () => {
  let apCitiesModule: ApCitiesModule;

  beforeEach(() => {
    apCitiesModule = new ApCitiesModule();
  });

  it('should create an instance', () => {
    expect(apCitiesModule).toBeTruthy();
  });
});
