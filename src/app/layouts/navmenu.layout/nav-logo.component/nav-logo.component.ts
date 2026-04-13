import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-nav-logo',
  imports: [NgOptimizedImage],
  templateUrl: './nav-logo.component.html',
  styleUrl: './nav-logo.component.scss',
})
export class NavLogoComponent {}
