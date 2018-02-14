import { NileWebModule } from './nile-web.module';

describe('NileWebModule', () => {
  let nileWebModule: NileWebModule;

  beforeEach(() => {
    nileWebModule = new NileWebModule();
  });

  it('should create an instance', () => {
    expect(nileWebModule).toBeTruthy();
  });
});
