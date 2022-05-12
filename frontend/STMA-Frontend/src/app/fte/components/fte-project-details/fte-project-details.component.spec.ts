import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FteProjectDetailsComponent } from './fte-project-details.component';

describe('FteProjectDetailsComponent', () => {
  let component: FteProjectDetailsComponent;
  let fixture: ComponentFixture<FteProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FteProjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FteProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
