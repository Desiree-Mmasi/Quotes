import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  upVote = 0;
  downVote = 0;
  
  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();
  @Output() love= new EventEmitter<boolean>();
  @Output() hate= new EventEmitter<boolean>();

  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  };

  like(){
    this.quote.upVote ++;
  }
  dislike(){
    this.quote.downVote ++;
  }
  constructor() { }

  ngOnInit() {
  }

}
