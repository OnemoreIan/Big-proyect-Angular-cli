import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1t5Component } from './p1t5.component';

describe('P1t5Component', () => {
  let component: P1t5Component;
  let fixture: ComponentFixture<P1t5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1t5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1t5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
