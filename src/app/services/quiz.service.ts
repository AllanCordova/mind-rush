import { Injectable } from '@angular/core';
import Quiz from '../model/Quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private _listQuiz: Quiz[] = [];

  constructor() {}

  public makeQuiz(quiz: Quiz): string {
    this._listQuiz.push(quiz);
    return quiz.id;
  }

  public get listQuiz(): Quiz[] {
    return this._listQuiz;
  }

  public getQuizById(id: string): Quiz | undefined {
    return this._listQuiz.find((q) => q.id === id);
  }

  public deleteQuiz(id: string): void {
    this._listQuiz = this._listQuiz.filter((q) => q.id !== id);
  }

  public clear(): void {
    this._listQuiz = [];
  }
}
