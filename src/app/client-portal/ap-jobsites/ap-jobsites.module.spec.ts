import { ApJobsitesModule } from './ap-jobsites.module';

describe('ApJobsitesModule', () => {
  let apJobsitesModule: ApJobsitesModule;

  beforeEach(() => {
    apJobsitesModule = new ApJobsitesModule();
  });

  it('should create an instance', () => {
    expect(apJobsitesModule).toBeTruthy();
  });
});
