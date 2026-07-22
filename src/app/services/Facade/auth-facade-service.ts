import { inject, Injectable } from '@angular/core';
import { AuthApiService, GoogleLoginCredentials, LoginCredentials } from '../API/auth-api-service';
import { AuthStateDomainService } from '../Domain/auth-state-domain-service';
import { CacheService } from '../cache-service';
import { firstValueFrom, map } from 'rxjs';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { WorkspaceFacadeService } from './workspace-facade-service';
import { Channel } from '../../models/channel.model';
import { YoutubeApiService } from '../API/youtube-api-service';
import { templateSchedule } from '../../models/schedule-pattern.model';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  private readonly router = inject(Router);
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

    // RESTORE CACHED CHANNELS
    const cachedChannels = this.cache.get<Channel[]>('linked_channels');
    if (cachedChannels) {
      const rehydratedChannels = cachedChannels.map((channel) => {
        if (channel.shedule && channel.shedule.schedule) {
          channel.shedule.schedule = channel.shedule.schedule.map((day) => ({
            ...day,
            // String to Date
            times: day.times.map((timeStr) => new Date(timeStr)),
          }));
        }
        return channel;
      });

      // Add to workspace signal
      this.workspaceService.channels.update(currentChannels => {
        // filter duplicates
        const uniqueCachedChannels = rehydratedChannels.filter(
          cached => !currentChannels.some(current => current.userId === cached.userId)
        );
        // merge
        return [...currentChannels, ...uniqueCachedChannels];
      });
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
  makeChannelFromResponse(response, accessToken: string): Channel | null {
    if (!response?.items || response.items.length === 0) {
      return null;
    }
    const item = response.items[0];

    const channel: Channel = {
      userId: item.id,
      title: item.snippet.title,
      photoUrl: item.snippet.thumbnails.default.url,
      platform: 'YouTube',
      accessToken: accessToken,
      shedule: templateSchedule,
    };

    return channel;
  }

  async saveLinkedChannel() {
    // Reacts if something in URL already about new channel
    try {
      // parse access_token from URL hash
      const hash = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hash.get('access_token');

      if (accessToken) {
        const channel = this.makeChannelFromResponse(
          await firstValueFrom(this.youtubeApi.fetchYoutubeChannelInfo(accessToken)),
          accessToken,
        );
        if (channel) {
          const responseFromOwnAPI = await firstValueFrom(this.authApi.saveLinkedChannel(channel)); // API
          this.workspaceService.channels.update((channels) => {
            const updatedChannels = [...channels, channel];
            this.cache.set('linked_channels', updatedChannels);

            return updatedChannels;
          }); // Component State
        }
      }
    } catch (error) {
      console.error('Помилка додання каналу:', error);
    }
  }

  async loginWithGoogleCode() {
    try {
      // parse access_token from URL hash
      const hash = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hash.get('access_token');

      if (accessToken) {
        const payload: GoogleLoginCredentials = {payload: accessToken};
        const response = await firstValueFrom(this.authApi.loginWithGoogle(payload));
        this.saveSession(response.user, response.jwtToken);
      }
      return true;
    } catch (error) {
      console.error('Помилка авторизації:', error);

      return false;
    }
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

  async logout() {
    await firstValueFrom(this.authApi.logout());
    this.authState.clear();
    this.cache.clear();

    await this.router.navigate(['/login']);
  }
  getLinkedChannels() {
    return this.authApi.getLinkedChannels();
  }
}
