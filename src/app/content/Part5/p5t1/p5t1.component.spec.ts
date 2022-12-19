import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5t1Component } from './p5t1.component';

describe('P5t1Component', () => {
  let component: P5t1Component;
  let fixture: ComponentFixture<P5t1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5t1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5t1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
