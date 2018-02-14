import { icaModule } from './ica.module';

describe('icaModule', () => {
  let icaModule: icaModule;

  beforeEach(() => {
    icaModule = new icaModule();
  });

  it('should create an instance', () => {
    expect(icaModule).toBeTruthy();
  });
});
