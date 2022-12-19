import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1t2Component } from './p1t2.component';

describe('P1t2Component', () => {
  let component: P1t2Component;
  let fixture: ComponentFixture<P1t2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1t2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1t2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
