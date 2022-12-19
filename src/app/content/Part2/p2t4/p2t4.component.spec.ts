import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2t4Component } from './p2t4.component';

describe('P2t4Component', () => {
  let component: P2t4Component;
  let fixture: ComponentFixture<P2t4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2t4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2t4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
