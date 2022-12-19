import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5t3Component } from './p5t3.component';

describe('P5t3Component', () => {
  let component: P5t3Component;
  let fixture: ComponentFixture<P5t3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5t3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5t3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
