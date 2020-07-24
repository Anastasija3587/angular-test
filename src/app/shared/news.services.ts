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
    return this.http.get(
      `http://newsapi.org/v2/top-headlines?country=us&category=business&page=${page}&pageSize=${pageSize}&apiKey=8a1bb630f5084ccdbb160829f159a759`,
    );
  }
}
