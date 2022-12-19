import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4t5Component } from './p4t5.component';

describe('P4t5Component', () => {
  let component: P4t5Component;
  let fixture: ComponentFixture<P4t5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P4t5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4t5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
