import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import Quiz from '../../../model/Quiz';
import Question from '../../../model/Question';

@Component({
  selector: 'app-start-quiz',
  imports: [],
  templateUrl: './start-quiz.component.html',
  styleUrl: './start-quiz.component.css',
})
export class StartQuizComponent implements OnInit {
  private _quiz!: Quiz;

  public constructor(
    private _quizService: QuizService,
    private _route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id') || '';
    this._quiz = this._quizService.getQuizById(id);
  }

  public get quiz(): Quiz {
    return this._quiz;
  }

  public respostUser(respost: string, quest: Question): void {
    if (respost === quest.answers[quest.correctAnswerIndex]) {
      alert('resposta correta parábens');
    }
  }
}
