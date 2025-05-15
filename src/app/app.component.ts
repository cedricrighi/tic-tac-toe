import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitlebarComponent } from './titlebar/titlebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitlebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tic-tac-toe';
}
