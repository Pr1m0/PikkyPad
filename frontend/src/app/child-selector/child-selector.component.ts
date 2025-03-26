import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildrenOutletContexts } from '@angular/router';
import { ChildService } from '../service/child.service';

@Component({
  selector: 'app-child-selector',
  imports: [ReactiveFormsModule],
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
      userId:[""],
    childname:[""],
    age:[""]
  })}
 
  selectedAccount:any =null;
  

  //Fiók kiválasztása

  getChildes(){
   this.children.getChild().subscribe({
    next:(res:any)=> {
      console.log(res);
      this.childForm= res.data;

    }
   })
   
  }

  addChild(){
    this.children.addChildren(this.childForm.value).subscribe({
      next:(res:any) => {
        console.log(res);
        this.getChildes();
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  deleteChildes(id:number){
    console.log(id);
    this.children.deleteChild(id).subscribe({
      next:(res:any) => {
        console.log(res);
        this.getChildes
      }
    })
  }

  editChild(data:any){
      console.log(data);
      this.addMode = false;
  }
  
  }


