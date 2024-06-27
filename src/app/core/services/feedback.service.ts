import { Injectable } from '@angular/core';
import { FeedbackInterface } from '../interface/feedback.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbacks: FeedbackInterface[] = [
    { title: 'Feedback 1', content: 'Great service!', rating: 5 },
    { title: 'Feedback 2', content: 'Really enjoyed the experience.', rating: 5 },
    { title: 'Feedback 3', content: 'Highly recommend!', rating: 4 }
  ];

  getFeedbacks(): FeedbackInterface[] {
    return this.feedbacks;
  }
}