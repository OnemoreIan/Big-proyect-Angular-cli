import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6t3Component } from './p6t3.component';

describe('P6t3Component', () => {
  let component: P6t3Component;
  let fixture: ComponentFixture<P6t3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P6t3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P6t3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
