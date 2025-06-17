import { Routes } from '@angular/router';
import { BuildQuizComponent } from './components/build-quiz/build-quiz.component';
import { BuildQuestionComponent } from './components/build-question/build-question.component';
import { ListQuizComponent } from './components/list-quiz/list-quiz.component';
import { StartQuizComponent } from './components/start-quiz/start-quiz.component';
import { PerformanceQuizComponent } from './components/performance-quiz/performance-quiz.component';

import { HomeComponent } from './pages/home/home.component';

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
  {
    path: 'start-quiz/:id/performance-quiz',
    component: PerformanceQuizComponent,
  },
];
