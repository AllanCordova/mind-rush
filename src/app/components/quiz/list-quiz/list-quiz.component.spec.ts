import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuizComponent } from './list-quiz.component';

describe('ListQuizComponent', () => {
  let component: ListQuizComponent;
  let fixture: ComponentFixture<ListQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
