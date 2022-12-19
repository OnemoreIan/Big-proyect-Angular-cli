import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5t5Component } from './p5t5.component';

describe('P5t5Component', () => {
  let component: P5t5Component;
  let fixture: ComponentFixture<P5t5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5t5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5t5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
