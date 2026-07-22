import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config-service';
import { User } from '../../models/user.model';
import { config, delay, map, Observable, of } from 'rxjs';
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
    const scopes = [
      this.config.get.SCOPE_OPENID,
      this.config.get.SCOPE_PROFILE,
      this.config.get.SCOPE_EMAIL,
      this.config.get.SCOPE_UPLOAD
    ].join(' ');

    const url =
      'https://accounts.google.com/o/oauth2/v2/auth' +
      `?client_id=${this.config.get.CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(this.config.get.REDIRECT_URI_LOGIN)}` +
      `&response_type=token` +
      `&scope=${encodeURIComponent(scopes)}`;

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
      `&scope=${encodeURIComponent(scopes)}` +
      `&prompt=consent`
      ;
      // 'https://accounts.google.com/o/oauth2/v2/auth' +
      // `?client_id=${this.config.get.CLIENT_ID}` +
      // `&redirect_uri=${encodeURIComponent(this.config.get.REDIRECT_URI_LOGIN)}` +
      // `&response_type=code` + // ask for a code instead of token
      // `&access_type=offline` + // Need refresh_token for backend
      // `&prompt=consent` + // Asks for a permission
      // `&scope=${encodeURIComponent(this.config.get.SCOPE_UPLOAD)}`;
    window.location.href = url;
  }

  loginWithGoogle(payload: GoogleLoginCredentials): Observable<AuthResponse> {
    if (!this.config.IsServerAvaliable)
      return of(MOCK_AUTH_RESPONSE).pipe(delay(600));
    return this.http.post<AuthResponse>(this.config.get.API_LOGIN_GOOGLE, payload );
  }

  loginWithPassword(credentials: LoginCredentials): Observable<AuthResponse> {
    if (!this.config.IsServerAvaliable)
      return of(MOCK_AUTH_RESPONSE).pipe(delay(600));
    return this.http.post<AuthResponse>(this.config.get.API_LOGIN_EMAIL, credentials);
  }

  signupWithPassword(credentials: LoginCredentials): Observable<AuthResponse>  {
    if (!this.config.IsServerAvaliable)
      return of(MOCK_AUTH_RESPONSE).pipe(delay(600));
    return this.http.post<AuthResponse>(this.config.get.API_SIGNUP_EMAIL, credentials);
  }

  getLinkedChannels(): Observable<Channel[]>  {
    if (!this.config.IsServerAvaliable)
      return of(fakeChannels).pipe(delay(600));
    return this.http.get<{ channels:Channel[] }>(this.config.get.API_GET_LINKED_CHANNELS)
      .pipe(map(res => res.channels));
  }

  saveLinkedChannel(channel: Channel | null): Observable<Channel | null> {
    if (!this.config.IsServerAvaliable) return of(fakeChannels[0]).pipe(delay(600));
    return this.http
      .post<{
        channels: Channel[];
      }>(this.config.get.API_SET_LINKED_CHANNELS, { channels: [channel] })
      .pipe(map(res => res.channels ? res.channels[0] : null));
  }

  logout(): Observable<any> {
    if (!this.config.IsServerAvaliable)
      return of(MOCK_AUTH_RESPONSE).pipe(delay(600));
    return this.http.get(this.config.get.API_LOGOUT);
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

export interface GoogleLoginCredentials {
  payload: string;
}
