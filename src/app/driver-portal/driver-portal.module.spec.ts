import { DriverPortalModule } from './driver-portal.module';

describe('DriverPortalModule', () => {
  let driverPortalModule: DriverPortalModule;

  beforeEach(() => {
    driverPortalModule = new DriverPortalModule();
  });

  it('should create an instance', () => {
    expect(driverPortalModule).toBeTruthy();
  });
});
