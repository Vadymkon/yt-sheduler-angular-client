import { Component, computed, inject, signal } from '@angular/core';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LangService } from '../../services/lang.service';
import { AuthFacadeService } from '../../services/Facade/auth-facade-service';
import { LoginCredentials } from '../../services/API/auth-api-service';

@Component({
  selector: 'app-login',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    ReactiveFormsModule,
    MatError,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  readonly ls = inject(LangService);
  private router = inject(Router);
  private readonly authService = inject(AuthFacadeService);
  loginPage: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  userIs: string = 'login';
  hide = signal(true);
  errorMessage = computed(() => {
    const control = this.loginPage.get('email');
    if (!control || control.valid || (!control.dirty && !control.touched)) return '';
    if (control.hasError('required')) return 'You must enter a value';
    if (control.hasError('email')) return 'Not a valid email';
    return 'Invalid field';
  });

  async ngOnInit(): Promise<void> {
    // try to login through auth
    await this.authService.loginWithGoogleCode();
    this.router.navigate(['/']);
  }

  async loginHandler() {
    const credentials = {
      email: this.loginPage.value.email!,
      password: this.loginPage.value.password!,
    };
    await this.authService.loginWithPassword(credentials);
    // console.log('Logined: ', this.loginPage.value.email, this.loginPage.value.password);
    this.router.navigate(['/']);
  }

  async signUpHandler() {
    const credentials = {
      email: this.loginPage.value.email!,
      password: this.loginPage.value.password!,
    };
    await this.authService.signUpWithPassword(credentials);
    // console.log('Signed up: ', this.loginPage.value.email, this.loginPage.value.password);
    this.router.navigate(['/']);
  }

  redirectToGoogleAuth() {
    this.authService.redirectToGoogleAuth();
  }
}
