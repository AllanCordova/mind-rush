import { v4 as uuidv4 } from 'uuid';

export default class Question {
  private _id: string = uuidv4();
  private _select: boolean = false;
  private _correctAnswerIndex: number | null = null;

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

  public set select(value: boolean) {
    this._select = value;
  }

  public get select(): boolean {
    return this._select;
  }

  public get correctAnswerIndex(): number | null {
    return this._correctAnswerIndex;
  }

  public set correctAnswerIndex(index: number | null) {
    this._correctAnswerIndex = index;
  }

  public addAnswer(ans: string): void {
    this._answers.push(ans);
  }
}
