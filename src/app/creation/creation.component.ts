import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.css'
})
export class CreationComponent {

  accountCreationForm = this.formBuilder.group({
    username: $localize`username`,
    password: $localize`password`
  });

  constructor(private authService:AuthService, private router : Router, private formBuilder:FormBuilder) {
    
  }

  async onSubmit(){
    await this.authService.createLogin(this.accountCreationForm.value.username || "username",this.accountCreationForm.value.password || "password");
    this.router.navigate(['/login'])
  }
}
