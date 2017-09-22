import { ApCurrentOrdersModule } from './ap-current-orders.module';

describe('ApCurrentOrdersModule', () => {
  let apCurrentOrdersModule: ApCurrentOrdersModule;

  beforeEach(() => {
    apCurrentOrdersModule = new ApCurrentOrdersModule();
  });

  it('should create an instance', () => {
    expect(apCurrentOrdersModule).toBeTruthy();
  });
});
