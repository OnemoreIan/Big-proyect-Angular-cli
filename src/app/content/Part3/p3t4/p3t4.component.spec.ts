import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3t4Component } from './p3t4.component';

describe('P3t4Component', () => {
  let component: P3t4Component;
  let fixture: ComponentFixture<P3t4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3t4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P3t4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
