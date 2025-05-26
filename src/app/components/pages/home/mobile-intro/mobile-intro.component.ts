import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-intro',
  imports: [TitleComponent, RouterModule],
  templateUrl: './mobile-intro.component.html',
  styleUrl: './mobile-intro.component.css',
})
export class MobileIntroComponent {}
