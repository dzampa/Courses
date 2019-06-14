import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavArrayComponent } from './nav-array.component';

describe('NavArrayComponent', () => {
  let component: NavArrayComponent;
  let fixture: ComponentFixture<NavArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
