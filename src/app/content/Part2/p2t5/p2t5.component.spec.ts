import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2t5Component } from './p2t5.component';

describe('P2t5Component', () => {
  let component: P2t5Component;
  let fixture: ComponentFixture<P2t5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2t5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2t5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
