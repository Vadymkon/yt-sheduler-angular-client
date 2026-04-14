import { Component, inject } from '@angular/core';
import {
  MatDivider,
  MatListModule,
} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { ChangeLanguageComponent } from './change-language.component/change-language.component';
import { SendFeedbackComponent } from './send-feedback.component/send-feedback.component';

@Component({
  selector: 'app-bottom-actions-navbar',
  imports: [
    MatDivider,
    MatListModule,
    MatSelectModule,
    ChangeLanguageComponent,
    SendFeedbackComponent,
  ],
  templateUrl: './bottom-actions-navbar.component.html',
  styleUrl: './bottom-actions-navbar.component.scss',
})
export class BottomActionsNavbarComponent {}
