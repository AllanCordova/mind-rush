import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceQuizComponent } from './performance-quiz.component';

describe('PerformanceQuizComponent', () => {
  let component: PerformanceQuizComponent;
  let fixture: ComponentFixture<PerformanceQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
