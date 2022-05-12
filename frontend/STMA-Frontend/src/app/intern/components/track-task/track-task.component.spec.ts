import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTaskComponent } from './track-task.component';

describe('TrackTaskComponent', () => {
  let component: TrackTaskComponent;
  let fixture: ComponentFixture<TrackTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
