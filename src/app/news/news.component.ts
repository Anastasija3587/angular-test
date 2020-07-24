import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.services';
import { generate } from 'shortid';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  public page: number;
  public pageSize: number;
  public filter = '';

  constructor(public newsService: NewsService) {
    this.page = 1;
    this.pageSize = 10;
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
        localStorage.setItem('news', JSON.stringify(this.newsService.news)),
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

  filterNews(e): any {
    console.log(e.target.value);
    this.newsService.news = this.newsService.news.filter(el =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    e.target.value = '';
  }
}
