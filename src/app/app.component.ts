import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { BlogPost } from './models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  blogPosts?: Observable<BlogPost[]>;

  constructor(private restService: RestService) {}

  makeGetCall() {
    this.blogPosts = this.restService.get<BlogPost[]>('/posts');
  }
}
