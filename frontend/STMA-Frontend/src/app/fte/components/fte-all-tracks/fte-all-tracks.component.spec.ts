import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FteAllTracksComponent } from './fte-all-tracks.component';

describe('FteAllTracksComponent', () => {
  let component: FteAllTracksComponent;
  let fixture: ComponentFixture<FteAllTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FteAllTracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FteAllTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
