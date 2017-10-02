import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApOrdersComponent } from './ap-Orders.component';

describe('ApOrdersComponent', () => {
  let component: ApOrdersComponent;
  let fixture: ComponentFixture<ApOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
