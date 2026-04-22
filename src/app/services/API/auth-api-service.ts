import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config-service';
import { User } from '../../models/user.model';
import { delay, Observable, of } from 'rxjs';
import { fakeChannels, MOCK_AUTH_RESPONSE } from '../../../assets/fakedata';
import { Channel } from '../../models/channel.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  http = inject(HttpClient);
  config = inject(AppConfigService);

  // for login
  redirectToGoogleAuth() {
    const url =
      'https://accounts.google.com/o/oauth2/v2/auth' +
      `?client_id=${this.config.get.CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(this.config.get.REDIRECT_URI_LOGIN)}` +
      `&response_type=token` +
      `&scope=${encodeURIComponent(this.config.get.SCOPE_UPLOAD)}`;

    window.location.href = url;
  }

  // for adding new channel
  redirectToGoogleAuthChannel() {
    const scopes = [
      this.config.get.SCOPE_MANAGE
    ].join(' ');

    const url =
      'https://accounts.google.com/o/oauth2/v2/auth' +
      `?client_id=${this.config.get.CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(this.config.get.REDIRECT_URI)}` +
      `&response_type=token` +
      `&scope=${encodeURIComponent(scopes)}`;

      // 'https://accounts.google.com/o/oauth2/v2/auth' +
      // `?client_id=${this.config.get.CLIENT_ID}` +
      // `&redirect_uri=${encodeURIComponent(this.config.get.REDIRECT_URI_LOGIN)}` +
      // `&response_type=code` + // ask for a code instead of token
      // `&access_type=offline` + // Need refresh_token for backend
      // `&prompt=consent` + // Asks for a permission
      // `&scope=${encodeURIComponent(this.config.get.SCOPE_UPLOAD)}`;
    window.location.href = url;
  }

  loginWithGoogle(code: string): Observable<AuthResponse> {
    return of(MOCK_AUTH_RESPONSE).pipe(delay(600));
    return this.http.post<AuthResponse>(this.config.get.API_LOGIN_GOOGLE, { code });
  }

  loginWithPassword(credentials: LoginCredentials): Observable<AuthResponse> {
    return of(MOCK_AUTH_RESPONSE).pipe(delay(600));
    return this.http.post<AuthResponse>(this.config.get.API_LOGIN_EMAIL, credentials);
  }

  signupWithPassword(credentials: LoginCredentials): Observable<AuthResponse>  {
    return of(MOCK_AUTH_RESPONSE).pipe(delay(600));
    return this.http.post<AuthResponse>(this.config.get.API_SIGNUP_EMAIL, credentials);
  }

  getLinkedChannels(): Observable<Channel[]>  {
    return of(fakeChannels).pipe(delay(600));
    return this.http.get<Channel[]>(this.config.get.API_GET_LINKED_CHANNELS);
  }

  saveLinkedChannel(Channel: Channel): Observable<Channel> {
    return of(fakeChannels[0]).pipe(delay(600));
    return this.http.post<Channel>(this.config.get.API_SET_LINKED_CHANNELS, Channel);
  }
}

export interface AuthResponse {
  jwtToken: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
