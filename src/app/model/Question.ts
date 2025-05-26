import { v4 as uuidv4 } from 'uuid';

export interface AnswerType {
  answer: string;
  select: boolean;
}

export default class Question {
  private _id: string = uuidv4();
  private _select: boolean = false;
  private _correctAnswerIndex: number = 0;

  constructor(private _text: string, private _answers: AnswerType[] = []) {}

  public get id(): string {
    return this._id;
  }

  public get text(): string {
    return this._text;
  }

  public get answers(): AnswerType[] {
    return this._answers;
  }

  public set select(value: boolean) {
    this._select = value;
  }

  public get select(): boolean {
    return this._select;
  }

  public get correctAnswerIndex(): number {
    return this._correctAnswerIndex;
  }

  public set correctAnswerIndex(index: number) {
    this._correctAnswerIndex = index;
  }

  public addAnswer(ans: string, select: boolean = false): void {
    this._answers.push({ answer: ans, select: select });
  }
}
