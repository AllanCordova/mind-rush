import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { ImgServiceService } from '../../../services/img-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Quiz from '../../../model/Quiz';
import Question, { AnswerType } from '../../../model/Question';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-start-quiz',
  imports: [NgClass],
  templateUrl: './start-quiz.component.html',
  styleUrl: './start-quiz.component.css',
})
export class StartQuizComponent implements OnInit {
  private _quiz!: Quiz;
  private _question!: Question[];
  private _answerUser: string[] = [];
  private _indexQuestion: number = 0;
  private _id: string = '';
  public answerSelect: boolean = false;
  public imgSorteada: string = '';

  public constructor(
    private _quizService: QuizService,
    private _route: ActivatedRoute,
    private _routerNav: Router,
    private _imgService: ImgServiceService
  ) {}

  public ngOnInit(): void {
    this._id = this._route.snapshot.paramMap.get('id') || '';
    this._quiz = this._quizService.getQuizById(this._id);
    this._question = this.quiz.questions;
    this.imgSorteada = this._imgService.getRandomImg();
    this.resetAnswer();
  }

  public get quiz(): Quiz {
    return this._quiz;
  }

  public markAnswer(answer: AnswerType): void {
    const answers = this.question[this.indexQuestion].answers;
    answers.map((ans) => (ans.select = false));
    answer.select = true;
  }

  public resetAnswer(): void {
    for (let i: number = 0; i < this.question.length; i++) {
      const answers = this.question[i].answers;
      answers.map((ans) => (ans.select = false));
    }
  }

  public get question(): Question[] {
    return this._question;
  }

  public proxQuestion(): void {
    if (this.indexQuestion < this.question.length - 1) {
      this.imgSorteada = this._imgService.getRandomImg();
      this._indexQuestion++;
    }
  }

  public prevQuestion(): void {
    this.imgSorteada = this._imgService.getRandomImg();
    this._indexQuestion--;
  }

  public submitQuiz(): void {
    this._quiz.hits = 0;
    this._quiz.total = this.question.length;

    this.registerAnswersUser();

    this.comparingAnswers();

    this._routerNav.navigate(['/start-quiz/' + this._id + '/performance-quiz']);
  }

  private registerAnswersUser(): void {
    const answers = this._question.map((quest) => quest.answers);
    for (let i: number = 0; i < answers.length; i++) {
      for (let j: number = 0; j < answers[i].length; j++) {
        if (answers[i][j].select === true) {
          this._answerUser.push(answers[i][j].answer);
        }
      }
    }
  }

  private comparingAnswers(): void {
    for (let i: number = 0; i < this.question.length; i++) {
      const correctAnswerIndex: number = this.question[i].correctAnswerIndex;
      const correctAnswer: string =
        this.question[i].answers[correctAnswerIndex].answer;

      if (correctAnswer === this._answerUser[i]) {
        this._quiz.hits += 1;
      }
    }
  }

  public get indexQuestion(): number {
    return this._indexQuestion;
  }
}
