import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTaskDetailsComponent } from './track-task-details.component';

describe('TrackTaskDetailsComponent', () => {
  let component: TrackTaskDetailsComponent;
  let fixture: ComponentFixture<TrackTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackTaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
