import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import { RouterModule } from '@angular/router';
import Quiz from '../../model/Quiz';

@Component({
  selector: 'app-build-quiz',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './build-quiz.component.html',
  styleUrls: ['./build-quiz.component.css'],
})
export class BuildQuizComponent {
  public quiztitle: string = '';
  public quizDesc: string = '';
  public error: boolean = false;

  constructor(public _service: QuizService) {}

  public saveQuiz(): void {
    if (this.quiztitle.trim() === '') {
      this.error = true;
      return;
    }

    if (this.quiztitle.trim() === '') {
      this.error = true;
      return;
    }

    this.error = false;
    const quiz = new Quiz(this.quiztitle, this.quizDesc);
    this._service.makeQuiz(quiz);

    this.quiztitle = '';
    this.quizDesc = '';
  }
}
