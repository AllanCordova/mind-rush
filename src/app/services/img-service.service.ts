import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImgServiceService {
  private readonly _filenames = [
    'https://res.cloudinary.com/dbd51yqaz/image/upload/v1748300571/start_u00att.png',
    'https://res.cloudinary.com/dbd51yqaz/image/upload/v1748300582/startA_ruwx18.png',
    'https://res.cloudinary.com/dbd51yqaz/image/upload/v1748300608/startB_mquueo.png',
    'https://res.cloudinary.com/dbd51yqaz/image/upload/v1748300618/StartG_kulxru.png',
    'https://res.cloudinary.com/dbd51yqaz/image/upload/v1748300619/StartF_xwqv0o.png',
    'https://res.cloudinary.com/dbd51yqaz/image/upload/v1748300650/startE_obawlm.png',
    'https://res.cloudinary.com/dbd51yqaz/image/upload/v1748300651/startD_rztwaw.png',
    'https://res.cloudinary.com/dbd51yqaz/image/upload/v1748300654/startC_lqkerx.png',
  ];

  private readonly _listImg: string[] = [];

  constructor() {
    this._listImg = this._filenames;
  }

  public get listImg(): string[] {
    return this._listImg;
  }

  public getRandomImg(): string {
    const index = Math.floor(Math.random() * this._listImg.length);
    return this._listImg[index];
  }
}
