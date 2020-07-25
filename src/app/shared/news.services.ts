import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { generate } from 'shortid';

export interface News {
  id: string;
  title: string;
  urlToImage: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class NewsService {
  public news: News[] = [];

  constructor(private http: HttpClient) {}

  getNews(page, pageSize): Observable<any> {
    return this.http.post('/api/getnews', { page, pageSize });
  }
}
