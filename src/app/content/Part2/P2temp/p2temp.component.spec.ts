import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2tempComponent } from './p2temp.component';

describe('P2tempComponent', () => {
  let component: P2tempComponent;
  let fixture: ComponentFixture<P2tempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2tempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2tempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
