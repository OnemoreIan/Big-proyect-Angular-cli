import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6t5Component } from './p6t5.component';

describe('P6t5Component', () => {
  let component: P6t5Component;
  let fixture: ComponentFixture<P6t5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P6t5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P6t5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
