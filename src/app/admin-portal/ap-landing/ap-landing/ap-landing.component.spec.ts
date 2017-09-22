import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApLandingComponent } from './ap-landing.component';

describe('ApLandingComponent', () => {
  let component: ApLandingComponent;
  let fixture: ComponentFixture<ApLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
