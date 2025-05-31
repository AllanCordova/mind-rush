import Question from './Question';
import { v4 as uuidv4 } from 'uuid';

export default class Quiz {
  private _id: string = uuidv4();
  private _hits: number = 0;
  private _totalQuest: number = 0;

  constructor(
    private _title: string,
    private _desc: string,
    private _questions: Question[] = []
  ) {}

  public get id(): string {
    return this._id;
  }

  public get hits(): number {
    return this._hits;
  }

  public set hits(value: number) {
    this._hits = value;
  }

  public get total(): number {
    return this._totalQuest;
  }

  public set total(value: number) {
    this._totalQuest = value;
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
