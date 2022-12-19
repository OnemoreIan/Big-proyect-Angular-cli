import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1t1Component } from './p1t1.component';

describe('P1t1Component', () => {
  let component: P1t1Component;
  let fixture: ComponentFixture<P1t1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1t1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1t1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
