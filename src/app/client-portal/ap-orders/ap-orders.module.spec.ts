import { ApOrdersModule } from './ap-Orders.module';

describe('ApOrdersModule', () => {
  let apOrdersModule: ApOrdersModule;

  beforeEach(() => {
    apOrdersModule = new ApOrdersModule();
  });

  it('should create an instance', () => {
    expect(apOrdersModule).toBeTruthy();
  });
});
