import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors  } from '@angular/forms';
import { NgIf } from '@angular/common';
import { IRegister } from '../../interfaces/authentication';
import { AuthenticationService } from '../../services/authentication.service';

// Custom Validator: Checks if password and confirmPassword are the same
function passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordsMismatch: true };
}

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  @Input() error: string | undefined;
  registered: boolean = false;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),  // Must be a valid email
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),  // Must be at least 8 characters
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),  // Must be at least 8 characters
  }, { validators: passwordsMatchValidator });

  constructor(private authenticationService: AuthenticationService){}

  submit() {
    if (this.form.valid) {
      const registerDetails: IRegister = this.form.value
      this.authenticationService.register(registerDetails).subscribe((data) => {
        if(data.success) {
          // Communicate with the user
          console.log(data)
          this.registered = true;
        }
      })
    }
    else {
      this.error = "Please fill in form"
    }
  }
}
