import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-calcularhora',
  templateUrl: './calcularhora.component.html',
  styleUrls: ['./calcularhora.component.css']
})
export class CalcularhoraComponent {

   calcular(){
    let val1: any = document.querySelector('#horas');
    parseFloat(val1);
    let val2: any = document.querySelector('#dias');
    parseFloat(val2);

    
    let val3=( (val1 * 60) / val2);
    if(val3>60){
      let minutos = val3 % 60;
      let horas = (val3 - minutos) / 60;
      alert(horas+ ":" + minutos+ " horas por dia");
    }else{
      alert(val3+ " minutos por dia");
    }
    }
    
    
    
   calcula(){
    this.calcular();
    }
  
}

