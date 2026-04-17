import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-header-right',
  imports: [MatCardModule, NgOptimizedImage, MatButtonModule, MatIconButton],
  templateUrl: './header-right.component.html',
  styleUrl: './header-right.component.scss',
})
export class HeaderRightComponent {}
