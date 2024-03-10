import { Component, OnInit } from '@angular/core';
import { Answer, Question, QuestionService } from '../question.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    constructor(private questionService:QuestionService,private router:Router){
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
  saveAnswer()
  {
    this.answer.originalAnswer=this.question.answer;
    this.answer.qno=this.question.qno;
    this.answer.qtext=this.question.qtext;
    this.answer.submittedAnswer=this.submittedAnswer;

    this.questionService.saveAnswer(this.answer).subscribe();
  }
 endexam(){
    this.router.navigate(['score']);
 }
}
