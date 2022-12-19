import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3t2Component } from './p3t2.component';

describe('P3t2Component', () => {
  let component: P3t2Component;
  let fixture: ComponentFixture<P3t2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3t2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P3t2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
