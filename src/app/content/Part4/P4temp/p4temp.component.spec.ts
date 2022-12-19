import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4tempComponent } from './p4temp.component';

describe('P4tempComponent', () => {
  let component: P4tempComponent;
  let fixture: ComponentFixture<P4tempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P4tempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P4tempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
