import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { ImgServiceService } from '../../../../services/img-service.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  imports: [TitleComponent, RouterModule],
  animations: [
    trigger('fadeInTitle', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-200px)' }),
        animate(
          '1200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class IntroComponent {
  private _img: string[] = [];
  public constructor(private _imgService: ImgServiceService) {
    while (this._img.length < 3) {
      const img: string = _imgService.getRandomImg();
      if (!this._img.includes(img)) {
        this._img.push(img);
      }
    }
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public getImg(index: number): string {
    return this._img[index];
  }
}
