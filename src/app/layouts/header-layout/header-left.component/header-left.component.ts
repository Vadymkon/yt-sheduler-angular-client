import { Component, inject } from '@angular/core';
import { AppConfigService } from '../../../services/app-config-service';

@Component({
  selector: 'app-header-left',
  imports: [],
  templateUrl: './header-left.component.html',
  styleUrl: './header-left.component.scss',
})
export class HeaderLeftComponent {
  protected readonly appConf = inject(AppConfigService);
}
