import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApHomeComponent } from './ap-home.component';

describe('ApHomeComponent', () => {
  let component: ApHomeComponent;
  let fixture: ComponentFixture<ApHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
