import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTempComponent } from './content-temp.component';

describe('ContentTempComponent', () => {
  let component: ContentTempComponent;
  let fixture: ComponentFixture<ContentTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
