import { ApVendorsModule } from './ap-vendors.module';

describe('ApVendorsModule', () => {
  let apVendorsModule: ApVendorsModule;

  beforeEach(() => {
    apVendorsModule = new ApVendorsModule();
  });

  it('should create an instance', () => {
    expect(apVendorsModule).toBeTruthy();
  });
});
