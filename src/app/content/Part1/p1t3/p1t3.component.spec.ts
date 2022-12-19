import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1t3Component } from './p1t3.component';

describe('P1t3Component', () => {
  let component: P1t3Component;
  let fixture: ComponentFixture<P1t3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1t3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1t3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
