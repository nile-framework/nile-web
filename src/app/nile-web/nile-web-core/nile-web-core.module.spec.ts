import { NileWebCoreModule } from './nile-web-core.module';

describe('NileWebCoreModule', () => {
  let nileWebCoreModule: NileWebCoreModule;

  beforeEach(() => {
    nileWebCoreModule = new NileWebCoreModule();
  });

  it('should create an instance', () => {
    expect(nileWebCoreModule).toBeTruthy();
  });
});
