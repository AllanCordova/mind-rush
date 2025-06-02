import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import Quiz from '../../../model/Quiz';
import Question, { AnswerType } from '../../../model/Question';

@Component({
  selector: 'app-build-question',
  imports: [FormsModule, NgClass],
  templateUrl: './build-question.component.html',
  styleUrls: ['./build-question.component.css'],
})
export class BuildQuestionComponent implements OnInit {
  private quizId: string = '';
  public quiz!: Quiz;

  public questionText: string = '';
  public answerText: string = '';

  public tempAnswers: AnswerType[] = [];
  public correctAnswerIndex: number | null = null;

  public error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('id') || '';
    this.quiz = this.quizService.getQuizById(this.quizId);
  }

  markCorrect(index: number) {
    this.correctAnswerIndex = index;
  }

  addAnswer(): void {
    if (this.answerText.trim()) {
      this.error = false;
      this.tempAnswers.push({ answer: this.answerText.trim(), select: false });
      this.answerText = '';
    } else {
      this.error = true;
    }
  }

  saveQuestion() {
    if (
      !this.questionText.trim() ||
      this.tempAnswers.length < 2 ||
      this.correctAnswerIndex === null
    ) {
      this.error = true;
      return;
    }
    this.error = false;

    const question = new Question(this.questionText, this.tempAnswers);
    question.correctAnswerIndex = this.correctAnswerIndex;

    this.quiz?.questions.push(question);

    // Resetar campos
    this.questionText = '';
    this.tempAnswers = [];
    this.correctAnswerIndex = null;
  }
}
