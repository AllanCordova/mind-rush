import { Routes } from '@angular/router';
import { BuildQuizComponent } from './components/quiz/build-quiz/build-quiz.component';
import { BuildQuestionComponent } from './components/quiz/build-question/build-question.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ListQuizComponent } from './components/quiz/list-quiz/list-quiz.component';
import { StartQuizComponent } from './components/quiz/start-quiz/start-quiz.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/build-quiz', component: BuildQuizComponent },
  {
    path: 'build-quiz/:id/build-question',
    component: BuildQuestionComponent,
  },
  { path: 'home/list-quiz', component: ListQuizComponent },
  { path: 'list-quiz/:id/start-quiz', component: StartQuizComponent },
];
