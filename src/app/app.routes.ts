import { Routes } from '@angular/router';
import { BuildQuizComponent } from './components/quiz/build-quiz/build-quiz.component';
import { BuildQuestionComponent } from './components/quiz/build-question/build-question.component';
import { MainComponent } from './components/main/main.component';
export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'build-quiz', component: BuildQuizComponent },
  { path: 'build-quiz/:id/build-question', component: BuildQuestionComponent },
];
