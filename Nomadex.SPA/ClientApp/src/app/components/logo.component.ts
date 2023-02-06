import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-logo',
  styles: [
    `
      @import '~@fontsource/sansita-swashed/500.css';
    `,
  ],
  template: `
    <div
      class="btn btn-ghost normal-case text-xl font-['Sansita_Swashed']"
      routerLink="/home">
      <span class="text-primary">Nomad</span>
      <span class="text-neutral-content">ex</span>
    </div>
  `,
})
export class LogoComponent {}
