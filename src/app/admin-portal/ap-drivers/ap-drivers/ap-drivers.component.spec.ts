import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApDriversComponent } from './ap-drivers.component';

describe('ApDriversComponent', () => {
  let component: ApDriversComponent;
  let fixture: ComponentFixture<ApDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
