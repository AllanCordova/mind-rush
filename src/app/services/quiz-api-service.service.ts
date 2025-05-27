import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AdapterApi } from '../model/AdapterApi';
import Quiz from '../model/Quiz';

@Injectable({ providedIn: 'root' })
export class QuizApiService {
  private API_URL = 'https://opentdb.com/api.php?amount=5&type=multiple';

  constructor(private http: HttpClient) {}

  fetchQuiz() {
    return this.http
      .get<any>(this.API_URL)
      .pipe(map((response) => AdapterApi.fromOpenTDB(response)));
  }
}
