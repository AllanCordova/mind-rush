import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import Quiz from '../../model/Quiz';
import Question from '../../model/Question';

@Component({
  selector: 'app-build-quiz',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './build-quiz.component.html',
  styleUrls: ['./build-quiz.component.css'],
})
export class BuildQuizComponent {
  public quiztitle: string = '';
  public quizDesc: string = '';
  public questionText: string = '';
  public questions: Question[] = [];
  public selectedQuestionIndex: number | null = null;
  public newAnswer: string = '';

  constructor(public _service: QuizService) {}

  public addQuestion(): void {
    if (this.questionText.trim()) {
      const question = new Question(this.questionText, []);
      this.questions.push(question);
      this.questionText = '';
    }
  }

  public selectQuestion(index: number): void {
    this.selectedQuestionIndex = index;
  }

  public addAnswerToSelected(): void {
    if (this.selectedQuestionIndex !== null && this.newAnswer.trim()) {
      this.questions[this.selectedQuestionIndex].answers.push(
        this.newAnswer.trim()
      );
      this.newAnswer = '';
    }
  }

  public saveQuiz(): void {
    const quiz = new Quiz(this.quiztitle, this.quizDesc, this.questions);
    this._service.makeQuiz(quiz);

    // reset
    this.quiztitle = '';
    this.quizDesc = '';
    this.questions = [];
    this.selectedQuestionIndex = null;
  }
}
