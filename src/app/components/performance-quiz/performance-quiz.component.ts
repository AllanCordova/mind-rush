import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import Quiz from '../../model/Quiz';
import { ImgServiceService } from '../../services/img-service.service';

@Component({
  selector: 'app-performance-quiz',
  imports: [RouterModule],
  templateUrl: './performance-quiz.component.html',
  styleUrl: './performance-quiz.component.css',
})
export class PerformanceQuizComponent implements OnInit {
  private _quiz!: Quiz;
  public pathImg: string = '';
  public hits: number = 0;
  public hitsCent: number = 0;
  public points: number = 0;
  public totalQuest: number = 0;

  public constructor(
    private _quizService: QuizService,
    private _route: ActivatedRoute,
    private _imgService: ImgServiceService
  ) {
    this.pathImg = _imgService.getRandomImg();
  }

  public ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id') || '';
    this._quiz = this._quizService.getQuizById(id);

    this.totalQuest = this._quiz.total;
    this.hits = this._quiz.hits;
    this.hitsCent = (this.hits / this.totalQuest) * 100;
    this.points = this.hits * 100;
  }
}
