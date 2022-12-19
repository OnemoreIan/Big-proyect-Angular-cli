import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4t4Component } from './p4t4.component';

describe('P4t4Component', () => {
  let component: P4t4Component;
  let fixture: ComponentFixture<P4t4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P4t4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4t4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
