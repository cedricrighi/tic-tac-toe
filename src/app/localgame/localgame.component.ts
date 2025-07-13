import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-localgame',
  imports: [RouterLink],
  templateUrl: './localgame.component.html',
  styleUrl: './localgame.component.css',
})
export class LocalgameComponent {
  board: string[] = Array(9).fill(' ');
  actualPlayer = history.state.sign;
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
