import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-selector',
  imports: [FormsModule],
  templateUrl: './child-selector.component.html',
  styleUrl: './child-selector.component.css'
})
export class ChildSelectorComponent {

  accounts = [
    {
      id:1, name:'Szülői fiók'
    }
  ];

  selectedAccount:any =null;
  newAccountName:string='';
  newAccountAge:number = 0;

  //Fiók kiválasztása

  onAccountSelect(accountsId:number){
    this.selectedAccount = this.accounts.find(acc => acc.id === accountsId);
    console.log('Kiválasztott fiók: ', this.selectedAccount)
  }

  //Új fiók felvétele
  addAccount() {
    if(this.newAccountName.trim()){
      const newAccount = {
        id: this.accounts.length + 1,  
        name: this.newAccountName,
        age: this.newAccountAge
      };
      this.accounts.push(newAccount);
      this.newAccountName="";
      console.log('Új fiók hozzáadva:', newAccount)
    }
  }

}
