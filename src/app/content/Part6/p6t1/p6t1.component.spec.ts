import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6t1Component } from './p6t1.component';

describe('P6t1Component', () => {
  let component: P6t1Component;
  let fixture: ComponentFixture<P6t1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P6t1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P6t1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
