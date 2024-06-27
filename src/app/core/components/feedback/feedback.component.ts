import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedbackInterface } from '../../interface/feedback.interface';
import { FeedbackService } from '../../services/feedback.service';
import { CommonModule, NgClass } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, NgClass, FontAwesomeModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedbacks: FeedbackInterface[] = [];
  currentSlide = 0;
  slideInterval!: any;

  constructor(private feedbackService: FeedbackService, library: FaIconLibrary) {
    library.addIcons(fasStar);
  }

  ngOnInit(): void {
    this.feedbacks = this.feedbackService.getFeedbacks();
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = window.setInterval(() => {
      this.next();
    }, 3000);
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.feedbacks.length;
  }

  previous() {
    this.currentSlide = (this.currentSlide - 1 + this.feedbacks.length) % this.feedbacks.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}