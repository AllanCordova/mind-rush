import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderQuizComponent } from './header-quiz.component';

describe('HeaderQuizComponent', () => {
  let component: HeaderQuizComponent;
  let fixture: ComponentFixture<HeaderQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
