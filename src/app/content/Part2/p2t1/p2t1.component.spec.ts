import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2t1Component } from './p2t1.component';

describe('P2t1Component', () => {
  let component: P2t1Component;
  let fixture: ComponentFixture<P2t1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2t1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2t1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
