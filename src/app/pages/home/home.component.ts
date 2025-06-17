import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { MobileIntroComponent } from '../../components/mobile-intro/mobile-intro.component';
import { AboutComponent } from '../../components/about/about.component';
import { HowPlayComponent } from '../../components/how-play/how-play.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [
    IntroComponent,
    MobileIntroComponent,
    AboutComponent,
    HowPlayComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate(
          '1200ms ease-out',
          style({ opacity: 1, transform: 'scale(1)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {}
