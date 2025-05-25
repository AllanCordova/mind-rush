import { Routes } from '@angular/router';
import { BuildQuizComponent } from './components/quiz/build-quiz/build-quiz.component';
import { BuildQuestionComponent } from './components/quiz/build-question/build-question.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'build-quiz', component: BuildQuizComponent },
  { path: 'build-quiz/:id/build-question', component: BuildQuestionComponent },
];

RouterModule.forRoot(routes, {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
});
