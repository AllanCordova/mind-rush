import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildQuestionComponent } from './build-question.component';

describe('BuildQuestionComponent', () => {
  let component: BuildQuestionComponent;
  let fixture: ComponentFixture<BuildQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
