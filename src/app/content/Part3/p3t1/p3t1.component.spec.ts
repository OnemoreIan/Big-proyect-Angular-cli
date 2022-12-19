import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3t1Component } from './p3t1.component';

describe('P3t1Component', () => {
  let component: P3t1Component;
  let fixture: ComponentFixture<P3t1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3t1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P3t1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
