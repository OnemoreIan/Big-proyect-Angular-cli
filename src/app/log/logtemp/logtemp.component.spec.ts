import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogtempComponent } from './logtemp.component';

describe('LogtempComponent', () => {
  let component: LogtempComponent;
  let fixture: ComponentFixture<LogtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogtempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
