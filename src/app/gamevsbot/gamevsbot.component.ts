import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gamevsbot',
  imports: [RouterLink],
  templateUrl: './gamevsbot.component.html',
  styleUrl: './gamevsbot.component.css',
})
export class GamevsbotComponent {
  board: string[] = Array(9).fill(' ');
  actualPlayer = 'X';
  showWinner = false;
  messageEnd = '';

  play(index: number) {
    if (this.board[index] !== ' ' || this.showWinner) {
      return;
    }
    this.board[index] = this.actualPlayer;
    this.actualPlayer = this.actualPlayer === 'X' ? 'O' : 'X';

    if (this.checkWinner()) {
      this.messageEnd = `Le joueur ${this.board[index]} a gagné !`;
      this.showWinner = true;
    } else if (this.board.every((cell) => cell !== ' ')) {
      this.messageEnd = 'Match nul !';
      this.showWinner = true;
    } else if (this.actualPlayer === 'O') {
      this.botPlay();
    }
  }

  botPlay() {
    const emptyIndices = this.board
      .map((value, index) => (value === ' ' ? index : -1))
      .filter((index) => index !== -1);

    setTimeout(() => {}, 1000);

    if (emptyIndices.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyIndices.length);
      this.play(emptyIndices[randomIndex]);
    }
  }

  checkWinner(): boolean {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.board[a] !== ' ' &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        this.showWinner = true;
        return true;
      }
    }
    return false;
  }
}
