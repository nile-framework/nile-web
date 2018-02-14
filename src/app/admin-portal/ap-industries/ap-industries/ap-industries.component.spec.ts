import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApIndustriesComponent } from './ap-industries.component';

describe('ApIndustriesComponent', () => {
  let component: ApIndustriesComponent;
  let fixture: ComponentFixture<ApIndustriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApIndustriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
