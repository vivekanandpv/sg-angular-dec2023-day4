import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class R2Interceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('r2 intercepts the request to: ', request.url);

    const clonedRequest = request.clone({
      headers: request.headers.set('X-R2-Header', 'My R2 value'),
    });

    return next
      .handle(clonedRequest)
      .pipe(tap((r) => console.log('Response interception in R2', r)));
  }
}
