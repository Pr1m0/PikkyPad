import { Component } from '@angular/core';
import { 
  FormBuilder, 
  FormControl, 
  FormGroup, 
  ReactiveFormsModule 
} from '@angular/forms';
import { AppComponent } from '../../app.component';
import { AuthapiService } from '../../services/authapi.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm !: FormGroup

  constructor(
    private authapi: AuthapiService,
    private builder: FormBuilder,
    private app : AppComponent
  ) {}

  ngOnInit() {
    this.loginForm = this.builder.group({
      name: new FormControl(''),
      password: new FormControl('')
    })
  }

  login() {
    this.authapi.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        console.log(data)
        localStorage.setItem('token', data.token)
        this.app.loggedIn = true
        this.loginForm.reset()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
