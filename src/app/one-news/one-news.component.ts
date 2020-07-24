import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NewsService } from '../shared/news.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  styleUrls: ['./one-news.component.css'],
})
export class OneNewsComponent implements OnInit {
  public oneNews: any;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    const getLocal = JSON.parse(localStorage.getItem('news'));
    this.oneNews = getLocal.find(el => el.id === id);
  }

  ngOnInit(): void {}
}
