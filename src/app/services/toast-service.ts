import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {

  constructor(private snackBar: MatSnackBar) {}

  success(message: string) {
    this.snackBar.open(message, 'OK', { duration: 3000 });
  }

  error(message: string) {
    this.snackBar.open(message, 'OK', { duration: 3000 });
  }
}
