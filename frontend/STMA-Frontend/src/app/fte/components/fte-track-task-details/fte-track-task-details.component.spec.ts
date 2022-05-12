import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FteTrackTaskDetailsComponent } from './fte-track-task-details.component';

describe('FteTrackTaskDetailsComponent', () => {
  let component: FteTrackTaskDetailsComponent;
  let fixture: ComponentFixture<FteTrackTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FteTrackTaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FteTrackTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
