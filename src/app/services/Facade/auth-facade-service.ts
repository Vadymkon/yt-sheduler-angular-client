import { inject, Injectable } from '@angular/core';
import { AuthApiService, LoginCredentials } from '../API/auth-api-service';
import { AuthStateDomainService } from '../Domain/auth-state-domain-service';
import { CacheService } from '../cache-service';
import { firstValueFrom } from 'rxjs';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { WorkspaceFacadeService } from './workspace-facade-service';
import { Channel } from '../../models/channel.model';
import { YoutubeApiService } from '../API/youtube-api-service';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  private youtubeApi = inject(YoutubeApiService);
  private authApi = inject(AuthApiService);
  private authState = inject(AuthStateDomainService);
  private workspaceService = inject(WorkspaceFacadeService);
  private cache = inject(CacheService);
  readonly isAuthenticated = this.authState.isAuthenticated;

  saveSession(user: User, token: string) {
    this.authState.updateAuth(user, token);
    this.cache.set('token', token);
    this.cache.set('user_info', user);
  }

  redirectToGoogleAuth() {
    this.authApi.redirectToGoogleAuth();
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

  // @ts-ignore
  makeChannelFromResponse(response, accessToken:string):Channel | null {
    if (!response?.items || response.items.length === 0) {
      return null;
    }
    const item = response.items[0];

      const channel: Channel = {
        userId: item.id,
        title: item.snippet.title,
        photoUrl: item.snippet.thumbnails.default.url,
        platform: 'YouTube',
        accessToken: accessToken
      };

      return channel;
  }

  async saveLinkedChannel() {
    // DEBUG: Serverless
    // Reacts if something in URL already about new channel
    try {
      // parse access_token from URL hash
      const hash = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hash.get('access_token');

      if (accessToken) {
        const channel = this.makeChannelFromResponse(await firstValueFrom(this.youtubeApi.fetchYoutubeChannelInfo(accessToken)), accessToken);
        if (channel) {
          const responseFromOwnAPI = await firstValueFrom(this.authApi.saveLinkedChannel(channel)); // API
          this.workspaceService.channels.update(channels => [...channels, channel]); // Component State
        }
      }
    }
    catch (error) {
      console.error('Помилка додання каналу:', error);
    }
  }

  async loginWithGoogleCode() {
    try {
      // parse access_token from URL hash
      const hash = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hash.get('access_token');

      if (accessToken) {
        const response = await firstValueFrom(this.authApi.loginWithGoogle(accessToken));
        this.saveSession(response.user, response.jwtToken);
      }
      return true;
    }
    catch (error) {
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
