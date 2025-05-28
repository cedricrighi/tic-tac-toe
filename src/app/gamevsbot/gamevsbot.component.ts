import { Component } from '@angular/core';

@Component({
  selector: 'app-gamevsbot',
  imports: [],
  templateUrl: './gamevsbot.component.html',
  styleUrl: './gamevsbot.component.css',
})
export class GamevsbotComponent {
  board: string[] = Array(9).fill(' ');
  actualPlayer = 'X';

  play(index: number) {
    if (this.board[index] !== ' ') {
      return;
    }
    console.log(this.board);
    console.log(`case: ${index}`);
    this.board[index] = this.actualPlayer;
    this.actualPlayer = this.actualPlayer === 'X' ? 'O' : 'X';
  }
}
