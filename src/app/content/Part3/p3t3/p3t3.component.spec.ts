import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3t3Component } from './p3t3.component';

describe('P3t3Component', () => {
  let component: P3t3Component;
  let fixture: ComponentFixture<P3t3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3t3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P3t3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
