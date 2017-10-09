import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPortalComponent } from './client-portal.component';

describe('ClientPortalComponent', () => {
  let component: ClientPortalComponent;
  let fixture: ComponentFixture<ClientPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
