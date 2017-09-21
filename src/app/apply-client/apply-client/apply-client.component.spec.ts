import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyClientComponent } from './apply-client.component';

describe('ApplyClientComponent', () => {
  let component: ApplyClientComponent;
  let fixture: ComponentFixture<ApplyClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
