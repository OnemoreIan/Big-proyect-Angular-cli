import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3tempComponent } from './p3temp.component';

describe('P3tempComponent', () => {
  let component: P3tempComponent;
  let fixture: ComponentFixture<P3tempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3tempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P3tempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
