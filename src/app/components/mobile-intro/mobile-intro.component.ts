import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { RouterModule } from '@angular/router';
import { ImgServiceService } from '../../services/img-service.service';

@Component({
  selector: 'app-mobile-intro',
  imports: [TitleComponent, RouterModule],
  templateUrl: './mobile-intro.component.html',
  styleUrl: './mobile-intro.component.css',
})
export class MobileIntroComponent implements OnInit {
  public imgPathList: string[] = [];

  public constructor(private _imgService: ImgServiceService) {}

  private getPathImg(): string {
    return this._imgService.getRandomImg();
  }

  private setImgPathList(size: number): void {
    while (this.imgPathList.length < size) {
      const img: string = this.getPathImg();
      if (!this.imgPathList.includes(img)) {
        this.imgPathList.push(img);
      }
    }
  }

  public ngOnInit(): void {
    this.setImgPathList(2);
  }
}
