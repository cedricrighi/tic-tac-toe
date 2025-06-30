import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isShowingSignChoosing = true;
  toGame: '' | 'vsbot' | 'local' = '';
  playerSign: 'X' | 'O' = 'X';

  showSignChoosing(gameType: 'local' | 'vsbot' | ''): void {
    this.toGame = gameType;
    this.isShowingSignChoosing = true;
  }

  closeSignChoosing(): void {
    this.isShowingSignChoosing = false;
    this.toGame = '';
  }

  selectX(): void {
    this.playerSign = 'X';
  }

  selectO(): void {
    this.playerSign = 'O';
  }
}
