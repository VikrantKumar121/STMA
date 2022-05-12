import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FteAllProjectsComponent } from './fte-all-projects.component';

describe('FteAllProjectsComponent', () => {
  let component: FteAllProjectsComponent;
  let fixture: ComponentFixture<FteAllProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FteAllProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FteAllProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
