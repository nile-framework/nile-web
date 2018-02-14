import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApCitiesComponent } from './ap-cities.component';

describe('ApCitiesComponent', () => {
  let component: ApCitiesComponent;
  let fixture: ComponentFixture<ApCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
