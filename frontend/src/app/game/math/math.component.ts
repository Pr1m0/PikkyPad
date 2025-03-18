import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-math',
  imports: [FormsModule],
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent {
  title = "Matemaikai feladatok";
  score = 0;
  currentProblem ='';
  correctAnswer=0;
  userAnswer : number |null=null;
  message = '';

  constructor(){
    this.generateProblem();
  }
  generateProblem(){
    const num1 = Math.floor(Math.random()*100);
    const num2 = Math.floor(Math.random()*100);
    const operation = Math.random() >0.5 ? '+': '-';


    if(operation === '+'){
      this.correctAnswer = num1 + num2;
    }else{
      this.correctAnswer = num1-num2;
    }
    this.currentProblem = `${num1} ${operation} ${num2} = ?`
  }
  checkAnswer(){
    if(this.userAnswer === this.correctAnswer){
      this.score++;
      this.message ="Helyes! Következő feladat.";
      this.generateProblem();
} else{
  this.score = 0;
  this.message='Helytelen válasz! Kezdd újra.';
  this.generateProblem();
}
this.userAnswer =null;
  }
}
