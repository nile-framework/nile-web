import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesSideMenuComponent } from './industries-side-menu.component';

describe('IndustriesSideMenuComponent', () => {
  let component: IndustriesSideMenuComponent;
  let fixture: ComponentFixture<IndustriesSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustriesSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
