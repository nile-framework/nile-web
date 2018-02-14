import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApClientsComponent } from './ap-clients.component';

describe('ApClientsComponent', () => {
  let component: ApClientsComponent;
  let fixture: ComponentFixture<ApClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
