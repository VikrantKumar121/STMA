import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FteCardComponent } from './fte-card.component';

describe('FteCardComponent', () => {
  let component: FteCardComponent;
  let fixture: ComponentFixture<FteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
