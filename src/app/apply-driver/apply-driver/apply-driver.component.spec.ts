import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDriverComponent } from './apply-driver.component';

describe('ApplyDriverComponent', () => {
  let component: ApplyDriverComponent;
  let fixture: ComponentFixture<ApplyDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
