import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { icaComponent } from './ica.component';

describe('icaComponent', () => {
  let component: icaComponent;
  let fixture: ComponentFixture<icaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ icaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(icaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
