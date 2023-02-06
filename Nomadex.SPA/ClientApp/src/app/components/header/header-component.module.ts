import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { heroBars3Solid } from '@ng-icons/heroicons/solid';
import { LogoComponent } from '../logo.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    LogoComponent,
    NgIconsModule.withIcons({ heroBars3Solid }),
  ],
  exports: [HeaderComponent],
})
export class HeaderComponentModule {}
