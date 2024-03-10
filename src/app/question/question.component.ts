import { Component, OnInit } from '@angular/core';
import { Answer, Question, QuestionService } from '../question.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit{

  subject:any='';   
  username:any='';
  submittedAnswer:string='';
    question:Question=new Question(0,'','','','','','','');
    answer:Answer=new Answer(0,'','','');
    constructor(private questionService:QuestionService){
             this.username=sessionStorage.getItem("username");
             this.subject=sessionStorage.getItem("subject");
    }
  ngOnInit(): void {
       this.questionService.getFirstQuestion(this.subject).subscribe(questionfromresponse=>this.question=questionfromresponse);
       
  }
  nextQuestion()
  {
        
        this.questionService.nextQuestion().subscribe(response=>this.question=response) ;
  }

  previousQuestion()
  {
   
    this.questionService.previousQuestion().subscribe(response=>this.question=response) ;
  }
}
