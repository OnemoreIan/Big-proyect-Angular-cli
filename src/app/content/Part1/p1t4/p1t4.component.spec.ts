import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1t4Component } from './p1t4.component';

describe('P1t4Component', () => {
  let component: P1t4Component;
  let fixture: ComponentFixture<P1t4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1t4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P1t4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
