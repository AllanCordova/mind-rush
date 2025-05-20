import { v4 as uuidv4 } from 'uuid';

export default class Question {
  private _id: string = uuidv4();
  constructor(private _text: string, private _answers: string[] = []) {}

  public get id(): string {
    return this._id;
  }

  public get text(): string {
    return this._text;
  }

  public get answers(): string[] {
    return this._answers;
  }

  public addAnswer(ans: string): void {
    this._answers.push(ans);
  }
}
