import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NileWebComponent } from './nile-web.component';

describe('NileWebComponent', () => {
  let component: NileWebComponent;
  let fixture: ComponentFixture<NileWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NileWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NileWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
