import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeaderQuizComponent } from './components/header-quiz/header-quiz.component';
import { FooterComponent } from './components/footer/footer.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeaderQuizComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      offset: 120,
    });
  }

  ngAfterViewInit() {
    AOS.refresh();
  }

  isHomeRoute(): boolean {
    return this.router.url === '/' || this.router.url === '/home';
  }
}
