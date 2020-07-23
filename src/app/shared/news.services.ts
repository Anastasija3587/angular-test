import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface News {
  title: string;
  urlToImage: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class NewsService {
  public news: News[] = [];

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http
      .get(
        'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a1bb630f5084ccdbb160829f159a759',
      )
      .pipe(tap(news => this.news = news.articles));
  }
}
