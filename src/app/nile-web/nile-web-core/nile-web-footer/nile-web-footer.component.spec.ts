import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NileWebFooterComponent } from './nile-web-footer.component';

describe('NileWebFooterComponent', () => {
  let component: NileWebFooterComponent;
  let fixture: ComponentFixture<NileWebFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NileWebFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NileWebFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
