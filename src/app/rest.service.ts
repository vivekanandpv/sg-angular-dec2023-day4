import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export function getUrl(path: string): string {
  return `${environment.baseUrl}${path}`;
}

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private httpClient: HttpClient) {
    console.log('RestService created');
  }

  get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(getUrl(path));
  }

  post<TReq, TRes>(path: string, body: TReq): Observable<TRes> {
    return this.httpClient.post<TRes>(getUrl(path), body);
  }

  put<TReq, TRes>(path: string, body: TReq): Observable<TRes> {
    return this.httpClient.put<TRes>(getUrl(path), body);
  }

  patch<TReq, TRes>(path: string, body: TReq): Observable<TRes> {
    return this.httpClient.patch<TRes>(getUrl(path), body);
  }

  delete<T>(path: string): Observable<T> {
    return this.httpClient.delete<T>(getUrl(path));
  }
}
