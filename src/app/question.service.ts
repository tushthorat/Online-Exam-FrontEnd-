import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpclient:HttpClient) {}

  getFirstQuestion(subject:string):Observable<Question>
  {
    // ArrayList<String> al =new ArrayList<String>();
    
    return this.httpclient.get<Question>("http://localhost:8080/getFirstQuestion/"+subject);

    // http://localhost:8080/getFirstQuestion will give JSON string having first Question details .
    // Angular will convert this JSON string into Question class's object .
   
   // [ () Question class object  subscribe() ] Observable object 
   // [ ()Employee class object  get() ] ArrayList class object
  }
  nextQuestion()
  {
    return this.httpclient.get<Question>("http://localhost:8080/nextQuestion");
  }
  previousQuestion()
  {
    return this.httpclient.get<Question>("http://localhost:8080/previousQuestion");
  }
  saveAnswer(answer:Answer)
  {
    return this.httpclient.post<void>("http://localhost:8080/saveAnswer",answer);
  }
  endexam()
  {
     return this.httpclient.get<number>("http://localhost:8080/endexam");
  }
  getAllAnswers()
  {
    return this.httpclient.get<Answer[]>("http://localhost:8080/getAllAnswers");
  }
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
