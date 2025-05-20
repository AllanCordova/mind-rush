import Question from './Question';
import { v4 as uuidv4 } from 'uuid';

export default class Quiz {
  private _id: string = uuidv4();
  constructor(
    private _title: string,
    private _desc: string,
    private _questions: Question[] = []
  ) {}

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get desc(): string {
    return this._desc;
  }

  public get questions(): Question[] {
    return this._questions;
  }

  public addQuestion(q: Question): void {
    this._questions.push(q);
  }
}
