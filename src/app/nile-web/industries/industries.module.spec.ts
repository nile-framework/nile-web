import { IndustriesModule } from './industries.module';

describe('IndustriesModule', () => {
  let industriesModule: IndustriesModule;

  beforeEach(() => {
    industriesModule = new IndustriesModule();
  });

  it('should create an instance', () => {
    expect(industriesModule).toBeTruthy();
  });
});
