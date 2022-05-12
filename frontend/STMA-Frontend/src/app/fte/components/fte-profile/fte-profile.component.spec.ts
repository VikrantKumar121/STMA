import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FteProfileComponent } from './fte-profile.component';

describe('FteProfileComponent', () => {
  let component: FteProfileComponent;
  let fixture: ComponentFixture<FteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FteProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
