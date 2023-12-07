import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class R1Interceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('r1 intercepts the request to: ', request.url);

    const clonedRequest = request.clone({
      headers: request.headers.set('X-R1-Header', 'My R1 value'),
    });

    return next
      .handle(clonedRequest)
      .pipe(tap((r) => console.log('Response interception in R1', r)));
  }
}
