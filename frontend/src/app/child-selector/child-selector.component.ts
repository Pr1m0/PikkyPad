import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ChildrenOutletContexts } from '@angular/router';
import { ChildService } from '../service/child.service';

@Component({
  selector: 'app-child-selector',
  imports: [FormsModule],
  templateUrl: './child-selector.component.html',
  styleUrl: './child-selector.component.css'
})
export class ChildSelectorComponent {

  childForm!:FormGroup
  constructor(
    private children : ChildService,
  private builder : FormBuilder){
    
  }
  addMode = true;
  ngOnInit(){
    this.childForm=this.builder.group({
    id:[''],
    name:[''],
    age:['']
  })}
 
  selectedAccount:any =null;
  newAccountName:string='';
  newAccountAge:number = 0;

  //Fiók kiválasztása

  getChild(){
   this.children.getChild().subscribe({
    next:(res:any)=> {
      console.log(res);

    }
   })
   
  }

  addChild(){
    this.children.addChild(this.childForm.value).subscribe({
      next:(res:any) => {
        console.log(res);
        this.childForm.reset();
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  deleteChild(id:number){
    console.log(id);
    this.children.deleteChild(id).subscribe({
      next:(res:any) => {
        console.log(res);
        this.getChild
      }
    })
  }

  editChild(data:any){
      console.log(data);
      this.addMode = false;
  }
  
  }


