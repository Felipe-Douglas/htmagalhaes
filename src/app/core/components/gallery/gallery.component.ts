import { Component, OnInit } from '@angular/core';
import { GalleyInterface } from '../../interface/gallery.interface';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  gallery: GalleyInterface[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.gallery = this.galleryService.getImages();
  }

}
