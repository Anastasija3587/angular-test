import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  constructor(public newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(console.log);
  }
}
