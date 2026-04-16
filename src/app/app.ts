import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <h1>PrimeNG Setup</h1>
    <p-button label="Click Me"></p-button>
  `
})
export class App{}