import { computed, Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthStateDomainService {
  // Private signal
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(null);

  // Public data (readonly)
  readonly user = this._user.asReadonly();
  readonly token = this._token.asReadonly();
  readonly isAuthenticated = computed(() => !!this._user());

  // Method to update
  updateAuth(user: User, token: string) {
    this._user.set(user);
    this._token.set(token);
  }

  // Clear user data
  clear() {
    this._user.set(null);
    this._token.set(null);
  }
}
