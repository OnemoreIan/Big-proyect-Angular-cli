import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4t2Component } from './p4t2.component';

describe('P4t2Component', () => {
  let component: P4t2Component;
  let fixture: ComponentFixture<P4t2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P4t2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4t2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
