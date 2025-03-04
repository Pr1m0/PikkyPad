import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {  
registerForm:FormGroup;
constructor(private builder: FormBuilder, private http:HttpClient, private router : Router,private dataService:DataService ) {

  this.registerForm = this.builder.group(
     {
    name:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]],
    childname:['', Validators.required],
    childage: [0, [Validators.required, Validators.min(0)]]  //, Validators.max(18)
})

 
}
 
register(){
  // if(this.registerForm.valid){
  //   this.http.post('http://localhost:4200/register', this.registerForm.value)
  //       .subscribe(responnse =>{
          console.log("Sikeres regisztráció" , this.registerForm.value,
            this.router.navigate(['/home-private']),
            this.dataService.setData(this.registerForm.value)// Add to local storagedataService.setData(this.registerForm.value); // Add to local storage
            
           
          );
  //       }, error => {
  //         console.log("Hiba a regisztráció során", error);
  //       });
  // }
}

}