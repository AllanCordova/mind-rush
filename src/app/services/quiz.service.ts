import { Injectable } from '@angular/core';
import Quiz from '../model/Quiz';
import Question from '../model/Question';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private _quizDefault: Quiz;
  private _listQuiz: Quiz[];

  constructor() {
    const questA = new Question('Qual o resultado da divisã: 200 / 10', [
      { answer: '30', select: false },
      { answer: '20', select: false },
      { answer: '10', select: false },
    ]);
    questA.correctAnswerIndex = 1;

    const questB = new Question('quanto é 40 + 50', [
      { answer: '22', select: false },
      { answer: '56', select: false },
      { answer: '90', select: false },
    ]);
    questB.correctAnswerIndex = 2;

    this._quizDefault = new Quiz('Calculos Matemáticos', 'Básico', [
      questA,
      questB,
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
