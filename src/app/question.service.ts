import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpclient:HttpClient) {}
}


// {"qno":1,"qtext":"why","op1":"A","op2":"B","op3":"C","op4":"D","answer":"A","subject":"java"}

export class Question
{
  qno:number;
  subject:string;
  qtext:string;
  op1:string;
  op2:string;
  op3:string;
  op4:string;
  answer:string;

   constructor(qno:number,subject:string,qtext:string,op1:string,op2:string,op3:string,op4:string,answer:string)
   {
    this.qno=qno;
    this.answer=answer;
    this.op1=op1;
    this.op2=op2;
    this.op3=op3;
    this.op4=op4;
    this.answer=answer;
    this.subject=subject;
    this.qtext=qtext;
   }
   
}


export class Answer
{
  qno:number;
  submittedAnswer:string;
  qtext:string;
  originalAnswer:string;
  
  constructor(qno:number,qtext:string,submittedAnswer:string,originalAnswer:string)
  {
      this.qno=qno;
      this.originalAnswer=originalAnswer;
      this.submittedAnswer=submittedAnswer;
      this.qtext=qtext;
  }
    
}
