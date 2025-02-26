import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';
import { ILogin } from '../../interfaces/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  @Input() error: string | undefined;

  form: FormGroup = new FormGroup({
    email: new FormControl('', {validators:[Validators.required, Validators.email]}),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  async submit() {
    if (this.form.valid) {
      const loginDetails: ILogin = this.form.value
      this.authenticationService.login(loginDetails).subscribe((data) => {
        if(data.success) {
          this.router.navigate(["/home"])
        } else {
          this.error = "Login details incorrect"
        }
      })
    }
  }
}
