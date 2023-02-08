import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  styles: [
    `
      @import '~@fontsource/sansita-swashed/500.css';
    `,
  ],
  template: `
    <div class="font-['Sansita_Swashed']">
      <span class="text-primary">Nomad</span>
      <span class="text-neutral-content">ex</span>
    </div>
  `,
})
export class LogoComponent {}
