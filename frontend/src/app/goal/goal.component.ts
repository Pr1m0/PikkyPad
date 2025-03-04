import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-goal',
  imports: [RegisterComponent],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {

  receivedData:any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    
    this.receivedData = this.dataService.getData();
  }
}
