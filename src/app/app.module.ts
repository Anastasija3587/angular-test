import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { NotFoundComponent } from './not-found/not-found.component';
import { OneNewsComponent } from './one-news/one-news.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: OneNewsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NotFoundComponent,
    OneNewsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
