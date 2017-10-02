import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { clientPortalComponent } from './client-portal.component';

describe('clientPortalComponent', () => {
  let component: clientPortalComponent;
  let fixture: ComponentFixture<clientPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ clientPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(clientPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
