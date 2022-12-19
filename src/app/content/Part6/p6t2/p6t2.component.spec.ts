import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6t2Component } from './p6t2.component';

describe('P6t2Component', () => {
  let component: P6t2Component;
  let fixture: ComponentFixture<P6t2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P6t2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P6t2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
