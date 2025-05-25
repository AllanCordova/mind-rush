import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-mobile-intro',
  imports: [TitleComponent],
  templateUrl: './mobile-intro.component.html',
  styleUrl: './mobile-intro.component.css',
})
export class MobileIntroComponent {}
