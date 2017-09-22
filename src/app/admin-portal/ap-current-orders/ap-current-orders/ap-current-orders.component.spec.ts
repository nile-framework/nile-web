import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApCurrentOrdersComponent } from './ap-current-orders.component';

describe('ApCurrentOrdersComponent', () => {
  let component: ApCurrentOrdersComponent;
  let fixture: ComponentFixture<ApCurrentOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApCurrentOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApCurrentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
