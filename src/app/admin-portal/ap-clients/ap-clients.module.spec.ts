import { ApClientsModule } from './ap-clients.module';

describe('ApClientsModule', () => {
  let apClientsModule: ApClientsModule;

  beforeEach(() => {
    apClientsModule = new ApClientsModule();
  });

  it('should create an instance', () => {
    expect(apClientsModule).toBeTruthy();
  });
});
