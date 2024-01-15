import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    username: 'user',
    password: 'pass'
  });

  constructor(private authService:AuthService,private formBuilder:FormBuilder, private router: Router){}
  
  login(){
    console.log(this.loginForm.value.username || "user",this.loginForm.value.password || "pass")
    this.authService.login(this.loginForm.value.username || "user",this.loginForm.value.password || "pass");
    this.router.navigate(['/clock']);
  }
}
