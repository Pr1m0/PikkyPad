import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {  
registerForm!:any;
constructor(private builder: FormBuilder,
  private router : Router,
   
  private auth: AuthService ) {

  this.registerForm = this.builder.group(
     {
    name:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]],
    // childname:['', Validators.required],
    // childage: [0, [Validators.required, Validators.min(0)]]  //, Validators.max(18)
})

 
}
 
register(){
  console.log("Müködik")
   if(this.registerForm.valid){
    this.auth.register( this.registerForm.value)
    .subscribe((res)=>{
          console.log("Sikeres regisztráció" ,res);
        
          this.registerForm.reset();  // Form ürítése
          this.router.navigate(['/login']);  // Átirányítás
        },
        
          
         
         );
         
   }}}
