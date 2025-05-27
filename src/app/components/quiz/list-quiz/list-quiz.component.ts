import { Component } from '@angular/core';
import { QuizApiService } from '../../../services/quiz-api-service.service';
import Quiz from '../../../model/Quiz';
import { RouterModule } from '@angular/router';
import { delay, finalize } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-list-quiz',
  imports: [RouterModule],
  templateUrl: './list-quiz.component.html',
  styleUrl: './list-quiz.component.css',
})
export class ListQuizComponent {
  public quizez: Quiz[];
  public isLoading: boolean = false;
  public hasError: boolean = false;

  constructor(
    private _quizApiService: QuizApiService,
    private _quizService: QuizService
  ) {
    this.quizez = _quizService.listQuiz;
    this.loadQuizzes();
  }

  public loadQuizzes(qty: number = 1): void {
    this.isLoading = true;
    this.hasError = false;

    const requests = Array.from({ length: qty }, () =>
      this._quizApiService.fetchQuiz()
    );

    forkJoin(requests)
      .pipe(
        delay(3000),
        finalize(() => (this.isLoading = false))
      )
      .subscribe({
        next: (quizzes) => {
          this.quizez.push(...quizzes);
        },
        error: (err) => {
          console.error('Erro ao carregar quizzes:', err);
          this.hasError = true;
        },
      });
  }
}
