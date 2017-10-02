import { TermsOfServiceModule } from './terms-of-service.module';

describe('TermsOfServiceModule', () => {
  let termsOfServiceModule: TermsOfServiceModule;

  beforeEach(() => {
    termsOfServiceModule = new TermsOfServiceModule();
  });

  it('should create an instance', () => {
    expect(termsOfServiceModule).toBeTruthy();
  });
});
