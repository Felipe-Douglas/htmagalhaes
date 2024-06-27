import { Injectable } from '@angular/core';
import { GalleyInterface } from '../interface/gallery.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private gallery: GalleyInterface[] = [
    {src: './assets/img/image1.png'},
    {src: './assets/img/image2.png'},
    {src: './assets/img/image4.png'},
    {src: './assets/img/image5.png'},
    {src: './assets/img/image6.png'},
  ];
  
  getImages() {
    return this.gallery;
  }

}
