import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApJobsitesComponent } from './ap-jobsites.component';

describe('ApjobsitesComponent', () => {
  let component: ApJobsitesComponent;
  let fixture: ComponentFixture<ApJobsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApJobsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApJobsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
