import { inject, Injectable } from '@angular/core';
import { AuthApiService, LoginCredentials } from '../API/auth-api-service';
import { AuthStateDomainService } from '../Domain/auth-state-domain-service';
import { CacheService } from '../cache-service';
import { firstValueFrom } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  private authApi = inject(AuthApiService);
  private authState = inject(AuthStateDomainService);
  private cache = inject(CacheService);
  readonly isAuthenticated = this.authState.isAuthenticated;

  saveSession(user: User, token: string) {
    this.authState.updateAuth(user, token);
    this.cache.set('token', token);
    this.cache.set('user_info', user);
  }

  restoreSession() {
    const token = this.cache.get<string>('token');
    const user = this.cache.get<User>('user_info');

    if (token && user) {
      this.authState.updateAuth(user, token);
    }
  }

  async loginWithPassword(credentials: LoginCredentials) {
    try {
      const response = await firstValueFrom(this.authApi.loginWithPassword(credentials));
      this.saveSession(response.user, response.jwtToken);

      return true;
    } catch (error) {
      console.error('Помилка авторизації:', error);

      return false;
    }
  }

  logout() {
    this.authState.clear();
    this.cache.clear();
  }

  async signUpWithPassword(credentials: LoginCredentials) {
    try {
      const response = await firstValueFrom(this.authApi.signupWithPassword(credentials));
      this.saveSession(response.user, response.jwtToken);

      return true;
    } catch (error) {
      console.error('Помилка авторизації:', error);

      return false;
    }
  }
  getLinkedChannels() {
    return this.authApi.getLinkedChannels();
  }
}
