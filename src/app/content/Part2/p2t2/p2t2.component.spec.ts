import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2t2Component } from './p2t2.component';

describe('P2t2Component', () => {
  let component: P2t2Component;
  let fixture: ComponentFixture<P2t2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2t2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2t2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
