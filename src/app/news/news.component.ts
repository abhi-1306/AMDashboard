import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsapi:NewsApiService,private snackbar: MatSnackBar ){
    console.log('app component constructor called');         
  }
  ngOnInit() {
    //load articles
  this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
//load news sources
this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
}

searchArticles(source){
console.log("selected source is: "+source);
this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
}

share(text: string) {
  this.snackbar.open(text, '', {duration: 3000,panelClass: ['snackbarColor']})
}

}
