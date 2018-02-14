import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApVendorsComponent } from './ap-vendors.component';

describe('ApVendorsComponent', () => {
  let component: ApVendorsComponent;
  let fixture: ComponentFixture<ApVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
