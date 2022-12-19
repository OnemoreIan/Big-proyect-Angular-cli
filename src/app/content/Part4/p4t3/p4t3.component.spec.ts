import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4t3Component } from './p4t3.component';

describe('P4t3Component', () => {
  let component: P4t3Component;
  let fixture: ComponentFixture<P4t3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P4t3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4t3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
