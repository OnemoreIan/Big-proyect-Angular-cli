import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5t2Component } from './p5t2.component';

describe('P5t2Component', () => {
  let component: P5t2Component;
  let fixture: ComponentFixture<P5t2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5t2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5t2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
