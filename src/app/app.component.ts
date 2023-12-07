import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private restService: RestService) {}

  makeGetCall() {
    this.restService
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (r) => console.log('GET response', r),
        error: (e) => console.log('error', e.message),
      });
  }

  makePostCall() {
    this.restService
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Hello there!',
      })
      .subscribe({
        next: (r) => console.log('POST response', r),
        error: (e) => console.log('error', e.message),
      });
  }

  makePutCall() {
    this.restService
      .put('https://jsonplaceholder.typicode.com/posts/4', {
        title: 'Hello there!',
      })
      .subscribe({
        next: (r) => console.log('PUT response', r),
        error: (e) => console.log('error', e.message),
      });
  }

  makePatchCall() {
    this.restService
      .patch('https://jsonplaceholder.typicode.com/posts/4', {
        title: 'Hello there!',
      })
      .subscribe({
        next: (r) => console.log('PATCH response', r),
        error: (e) => console.log('error', e.message),
      });
  }

  makeDeleteCall() {
    this.restService
      .delete('https://jsonplaceholder.typicode.com/posts/3')
      .subscribe({
        next: (r) => console.log('DELETE response', r),
        error: (e) => console.log('error', e.message),
      });
  }
}
