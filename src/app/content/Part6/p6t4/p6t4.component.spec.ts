import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6t4Component } from './p6t4.component';

describe('P6t4Component', () => {
  let component: P6t4Component;
  let fixture: ComponentFixture<P6t4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P6t4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P6t4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
