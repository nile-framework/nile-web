import { TermsOfUseModule } from './terms-of-use.module';

describe('TermsOfUseModule', () => {
  let termsOfUseModule: TermsOfUseModule;

  beforeEach(() => {
    termsOfUseModule = new TermsOfUseModule();
  });

  it('should create an instance', () => {
    expect(termsOfUseModule).toBeTruthy();
  });
});
