import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTodoComponent } from './track-todo.component';

describe('TrackTodoComponent', () => {
  let component: TrackTodoComponent;
  let fixture: ComponentFixture<TrackTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
