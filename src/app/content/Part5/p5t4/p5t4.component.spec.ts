import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5t4Component } from './p5t4.component';

describe('P5t4Component', () => {
  let component: P5t4Component;
  let fixture: ComponentFixture<P5t4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5t4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5t4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
