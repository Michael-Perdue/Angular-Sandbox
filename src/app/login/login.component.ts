import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder,ReactiveFormsModule} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,TranslateModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  loginForm = this.formBuilder.group({
    username: $localize`username`,
    password: $localize`password`
  });

  constructor(private authService:AuthService,private formBuilder:FormBuilder, private router: Router,private translateService:  TranslateService){
    localStorage.removeItem("loggedIn");
  }
  
  async login(){
    console.log(this.loginForm.value.username || "user",this.loginForm.value.password || "pass")
    await this.authService.login(this.loginForm.value.username || "user",this.loginForm.value.password || "pass");
    if(localStorage.getItem("loggedIn") == null){
      alert($localize`LOGIN ERROR: Invalid username or password`)
    }
    this.router.navigate(['/clock']);
  }
}
