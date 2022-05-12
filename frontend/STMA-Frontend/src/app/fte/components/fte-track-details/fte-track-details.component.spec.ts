import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FteTrackDetailsComponent } from './fte-track-details.component';

describe('FteTrackDetailsComponent', () => {
  let component: FteTrackDetailsComponent;
  let fixture: ComponentFixture<FteTrackDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FteTrackDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FteTrackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
