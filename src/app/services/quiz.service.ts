import { Injectable } from '@angular/core';
import Quiz from '../model/Quiz';
import Question from '../model/Question';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private _question: Question;
  private _quizDefault: Quiz;
  private _listQuiz: Quiz[];

  constructor() {
    this._question = new Question('Quanto e 10 + 20 ?', [
      { answer: '30', select: false },
      { answer: '20', select: false },
      { answer: '10', select: false },
    ]);
    this._question.correctAnswerIndex = 0;

    this._quizDefault = new Quiz('Calculo', 'Calculos Matemáticos', [
      this._question,
    ]);
    this._listQuiz = [this._quizDefault];
  }

  public makeQuiz(quiz: Quiz): string {
    this._listQuiz.push(quiz);
    return quiz.id;
  }

  public get listQuiz(): Quiz[] {
    return this._listQuiz;
  }

  public getQuizById(id: string): Quiz {
    return this._listQuiz.find((q) => q.id === id) ?? this._listQuiz[0];
  }

  public deleteQuiz(id: string): void {
    this._listQuiz = this._listQuiz.filter((q) => q.id !== id);
  }

  public clear(): void {
    this._listQuiz = [];
  }
}
