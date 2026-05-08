import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from './common/spinner/header/header.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'brian';
}
