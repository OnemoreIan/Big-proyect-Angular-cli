import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2t3Component } from './p2t3.component';

describe('P2t3Component', () => {
  let component: P2t3Component;
  let fixture: ComponentFixture<P2t3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2t3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2t3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
