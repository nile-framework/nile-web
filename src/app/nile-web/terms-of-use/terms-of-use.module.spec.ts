import { TermsOfUseModule } from './terms-of-use.module';

describe('TermsOfUseModule', () => {
  let TermsOfUseModule: TermsOfUseModule;

  beforeEach(() => {
    TermsOfUseModule = new TermsOfUseModule();
  });

  it('should create an instance', () => {
    expect(TermsOfUseModule).toBeTruthy();
  });
});
