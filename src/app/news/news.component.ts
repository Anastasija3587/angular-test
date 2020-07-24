import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.services';
import { generate } from 'shortid';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  public page: number;
  public pageSize: number;
  public filter: string;

  constructor(public newsService: NewsService) {
    this.page = 1;
    this.pageSize = 10;
    this.filter = '';
    if (!localStorage.getItem('news')) {
      this.newsService
        .getNews(this.page, this.pageSize)
        .pipe(
          tap(
            news =>
              (this.newsService.news = news.articles.map(el =>
                Object.assign(
                  {},
                  {
                    id: generate(),
                    title: el.title,
                    urlToImage: el.urlToImage,
                    content: el.content,
                  },
                ),
              )),
          ),
        )
        .subscribe(() =>
          localStorage.setItem('news', JSON.stringify(this.newsService.news)),
        );
    }
    this.newsService.news = JSON.parse(localStorage.getItem('news'));
  }

  ngOnInit(): void {}

  incrementPage(): void {
    this.page += 1;
    this.newsService
      .getNews(this.page, this.pageSize)
      .pipe(
        tap(
          news =>
            (this.newsService.news = news.articles.map(el =>
              Object.assign(
                {},
                {
                  id: generate(),
                  title: el.title,
                  urlToImage: el.urlToImage,
                  content: el.content,
                },
              ),
            )),
        ),
      )
      .subscribe(() =>
        this.newsService.news.length > 0
          ? localStorage.setItem('news', JSON.stringify(this.newsService.news))
          : localStorage.clear(),
      );
  }

  decrementPage(): void {
    this.page -= 1;
    this.newsService
      .getNews(this.page, this.pageSize)
      .pipe(
        tap(
          news =>
            (this.newsService.news = news.articles.map(el =>
              Object.assign(
                {},
                {
                  id: generate(),
                  title: el.title,
                  urlToImage: el.urlToImage,
                  content: el.content,
                },
              ),
            )),
        ),
      )
      .subscribe(() =>
        localStorage.setItem('news', JSON.stringify(this.newsService.news)),
      );
  }

  filterNews(e): void {
    this.filter = e.target.value;
    this.newsService.news = this.newsService.news.filter(el =>
      el.title.toLowerCase().includes(this.filter.toLowerCase()),
    );
    e.target.value = '';
    if (this.newsService.news.length === 0) {
      return localStorage.clear();
    }
    localStorage.setItem('news', JSON.stringify(this.newsService.news));
  }

  withoutFilter(): void {
    this.filter = '';
    this.newsService
      .getNews(this.page, this.pageSize)
      .pipe(
        tap(
          news =>
            (this.newsService.news = news.articles.map(el =>
              Object.assign(
                {},
                {
                  id: generate(),
                  title: el.title,
                  urlToImage: el.urlToImage,
                  content: el.content,
                },
              ),
            )),
        ),
      )
      .subscribe(() =>
        localStorage.setItem('news', JSON.stringify(this.newsService.news)),
      );
  }
}
