import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NileWebNavbarComponent } from './nile-web-navbar.component';

describe('NileWebNavbarComponent', () => {
  let component: NileWebNavbarComponent;
  let fixture: ComponentFixture<NileWebNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NileWebNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NileWebNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
