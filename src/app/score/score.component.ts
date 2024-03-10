import { Component, OnInit } from '@angular/core';
import { Answer, QuestionService } from '../question.service';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit{
    score:any='';
    allanswers:Answer[]=[];
   constructor(private questionService:QuestionService){
    this.questionService.getAllAnswers().subscribe(arrayfromresponse=>this.allanswers=arrayfromresponse);
  }
  ngOnInit(){
    this.questionService.endexam().subscribe(score=>this.score=score);
  }
   }
    

