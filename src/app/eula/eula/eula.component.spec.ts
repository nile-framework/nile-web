import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { eulaComponent } from './eula.component';

describe('eulaComponent', () => {
  let component: eulaComponent;
  let fixture: ComponentFixture<eulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ eulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(eulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
