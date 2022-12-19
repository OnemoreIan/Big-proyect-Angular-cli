import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3t5Component } from './p3t5.component';

describe('P3t5Component', () => {
  let component: P3t5Component;
  let fixture: ComponentFixture<P3t5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3t5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P3t5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
