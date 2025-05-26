import { Component } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import Quiz from '../../../model/Quiz';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-quiz',
  imports: [RouterModule],
  templateUrl: './list-quiz.component.html',
  styleUrl: './list-quiz.component.css',
})
export class ListQuizComponent {
  private _quizes: Quiz[];
  public constructor(private _quizService: QuizService) {
    this._quizes = _quizService.listQuiz;
  }

  public get quizez(): Quiz[] {
    return this._quizes;
  }
}
