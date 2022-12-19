import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5tempComponent } from './p5temp.component';

describe('P5tempComponent', () => {
  let component: P5tempComponent;
  let fixture: ComponentFixture<P5tempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5tempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5tempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
