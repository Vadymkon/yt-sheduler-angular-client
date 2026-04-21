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

  loginWithGoogle(googleToken: string): Observable<AuthResponse> {
    return of(MOCK_AUTH_RESPONSE).pipe(delay(600));
    return this.http.post<AuthResponse>(this.config.get.API_LOGIN_GOOGLE, { token: googleToken });
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

}


export interface AuthResponse {
  jwtToken: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

