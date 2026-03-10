import { Component } from '@angular/core';
import { SpaceNewsService } from '../common/service/space-news-service';
import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ISpaceNewsArticle } from '../common/ISpacesNewsArticle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-space-flight-news',
  imports: [CommonModule],
  templateUrl: './space-flight-news.html',
  styleUrl: './space-flight-news.css',
})
export class SpaceFlightNews implements OnInit {

  constructor(private spaceNewsService :SpaceNewsService, private cdr : ChangeDetectorRef ){}
  
  public articles: ISpaceNewsArticle[] = [];
  
  public hasError: boolean = false;
 

  next10(offset : number): void{
    if (offset>150) return;
    this.spaceNewsService.getNewsWithOffset(offset).subscribe({
      next: (response) => {
        console.log(response);
        this.hasError=false; this.articles.push(response.results);
      },
      error: () => {this.hasError=true},
      complete: () => {
        this.hasError=false
        this.cdr.detectChanges();
        this.next10(offset + 10);
      }
    })
  }

  ngOnInit(): void {
    this.spaceNewsService.getNews().subscribe({
      next: (response) => {
        this.hasError=false;
        this.articles = response.results;
      },
      error: () => {this.hasError=true},
      complete: () => {
        this.hasError=false
        this.cdr.detectChanges();
        this.next10(10);
      }
    })
  }

}
