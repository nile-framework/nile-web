import { eulaModule } from './eula.module';

describe('eulaModule', () => {
  let eulaModule: eulaModule;

  beforeEach(() => {
    eulaModule = new eulaModule();
  });

  it('should create an instance', () => {
    expect(eulaModule).toBeTruthy();
  });
});
