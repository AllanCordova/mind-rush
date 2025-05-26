import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
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
  public answerSelect: boolean = false;

  public constructor(
    private _quizService: QuizService,
    private _route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id') || '';
    this._quiz = this._quizService.getQuizById(id);
    this._question = this.quiz.questions;
  }

  public get quiz(): Quiz {
    return this._quiz;
  }

  public markAnswer(answer: AnswerType): void {
    const answers = this.question[this.indexQuestion].answers;
    answers.map((ans) => (ans.select = false));
    answer.select = true;
  }

  public get question(): Question[] {
    return this._question;
  }

  public proxQuestion(): void {
    if (this.indexQuestion < this.question.length - 1) {
      this._indexQuestion++;
    }
  }

  public prevQuestion(): void {
    this._indexQuestion--;
  }

  public submitQuiz(): void {
    const answers = this._question.map((quest) => quest.answers);
    for (let i: number = 0; i < answers.length; i++) {
      for (let j: number = 0; j < answers[i].length; j++) {
        if (answers[i][j].select === true) {
          this._answerUser.push(answers[i][j].answer);
        }
      }
    }
    console.log(this._answerUser);
  }

  public get indexQuestion(): number {
    return this._indexQuestion;
  }
}
