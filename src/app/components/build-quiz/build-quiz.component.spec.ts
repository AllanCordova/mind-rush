import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildQuizComponent } from './build-quiz.component';

describe('BuildQuizComponent', () => {
  let component: BuildQuizComponent;
  let fixture: ComponentFixture<BuildQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
