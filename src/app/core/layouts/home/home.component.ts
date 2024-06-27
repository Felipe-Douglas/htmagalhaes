import { Component } from '@angular/core';
import { IntroducesComponent } from '../../components/introduces/introduces.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { FeedbackComponent } from '../../components/feedback/feedback.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    IntroducesComponent, 
    NewsletterComponent,
    GalleryComponent,
    FeedbackComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
