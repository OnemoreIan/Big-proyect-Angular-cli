import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4t1Component } from './p4t1.component';

describe('P4t1Component', () => {
  let component: P4t1Component;
  let fixture: ComponentFixture<P4t1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P4t1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4t1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
