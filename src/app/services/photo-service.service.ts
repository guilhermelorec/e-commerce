import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  getImages(): Promise<any[]> {
    return Promise.resolve([
      {
        itemImageSrc: 'https://www.elpatronplatas.com.br/cdn/shop/files/banner-el-patron-pablito-desktop.webp?crop=center&v=1713445995&width=1920',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'https://www.elpatronplatas.com.br/cdn/shop/files/banner-el-patron-pedrinho-desktop.webp?crop=center&v=1713446008&width=1920',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'https://www.elpatronplatas.com.br/cdn/shop/files/banner-el-patron-xama-desktop.webp?crop=center&v=1713446008&width=1920',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
    ]);
  }
}