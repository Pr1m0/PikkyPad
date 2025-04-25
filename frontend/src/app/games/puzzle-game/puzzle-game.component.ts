import { NgFor, NgStyle, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  standalone:true,
  imports:[NgStyle,NgFor],
  templateUrl: './puzzle-game.component.html',
  styleUrls: ['./puzzle-game.component.css']
})
export class PuzzleGameComponent {
  images: string[] = [
    'http://localhost:8000/img/games/puzzle/lionpuzzle.jpg',
    
  ];
  currentImageIndex: number = 0;
  pieces: PuzzlePiece[] = [];
  rows: number = 3;
  cols: number = 3;
  pieceSize: number = 100;
  emptyPosition: {row: number, col: number} = {row: 2, col: 2}; // Üres pozíció

  constructor() {
    this.createPuzzle();
  }

  createPuzzle(): void {
    // 1. Véletlenszerű kép választása
    this.currentImageIndex = Math.floor(Math.random() * this.images.length);
    
    // 2. Puzzle darabok generálása
    this.generatePieces();
    
    // 3. Darabok összekeverése
    this.shufflePieces();
  }

  private generatePieces(): void {
    this.pieces = [];
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        // Az utolsó pozíció üres
        if (row === this.emptyPosition.row && col === this.emptyPosition.col) continue;
        
        this.pieces.push({
          correctRow: row,
          correctCol: col,
          currentRow: row,
          currentCol: col,
          imageUrl: this.images[this.currentImageIndex]
        });
      }
    }
  }

  private shufflePieces(): void {
    // Ideiglenes mátrix létrehozása
    const tempGrid: (PuzzlePiece | null)[][] = Array.from({length: this.rows}, () => 
      Array.from({length: this.cols}, () => null));

    // Helyezzük el a darabokat a helyes pozíciókra
    this.pieces.forEach(piece => {
      tempGrid[piece.correctRow][piece.correctCol] = piece;
    });

    // Véletlenszerű mozgatások
    for (let i = 0; i < 100; i++) {
      this.randomMove(tempGrid);
    }

    // Frissítjük a darabok aktuális pozícióját
    this.updateCurrentPositions(tempGrid);
  }

  private randomMove(grid: (PuzzlePiece | null)[][]): void {
    const directions = [
      {dr: -1, dc: 0}, // Fel
      {dr: 1, dc: 0},  // Le
      {dr: 0, dc: -1}, // Balra
      {dr: 0, dc: 1}   // Jobbra
    ];

    const validMoves = directions.filter(dir => {
      const newRow = this.emptyPosition.row + dir.dr;
      const newCol = this.emptyPosition.col + dir.dc;
      return newRow >= 0 && newRow < this.rows && 
             newCol >= 0 && newCol < this.cols;
    });

    if (validMoves.length > 0) {
      const move = validMoves[Math.floor(Math.random() * validMoves.length)];
      const newRow = this.emptyPosition.row + move.dr;
      const newCol = this.emptyPosition.col + move.dc;

      // Darab mozgatása
      const piece = grid[newRow][newCol];
      if (piece) {
        grid[this.emptyPosition.row][this.emptyPosition.col] = piece;
        grid[newRow][newCol] = null;
        this.emptyPosition = {row: newRow, col: newCol};
      }
    }
  }

  private updateCurrentPositions(grid: (PuzzlePiece | null)[][]): void {
    this.pieces = [];
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const piece = grid[row][col];
        if (piece) {
          piece.currentRow = row;
          piece.currentCol = col;
          this.pieces.push(piece);
        }
      }
    }
  }

  movePiece(piece: PuzzlePiece): void {
    // Ellenőrizzük, hogy a darab szomszédos-e az üres helyhez
    const rowDiff = Math.abs(piece.currentRow - this.emptyPosition.row);
    const colDiff = Math.abs(piece.currentCol - this.emptyPosition.col);
    const isAdjacent = (rowDiff === 1 && colDiff === 0) || 
                      (rowDiff === 0 && colDiff === 1);

    if (isAdjacent) {
      // Darab mozgatása
      const oldRow = piece.currentRow;
      const oldCol = piece.currentCol;
      piece.currentRow = this.emptyPosition.row;
      piece.currentCol = this.emptyPosition.col;
      this.emptyPosition = {row: oldRow, col: oldCol};

      // Megoldás ellenőrzése
      this.checkSolution();
    }
  }

  checkSolution(): void {
    const isSolved = this.pieces.every(piece => 
      piece.currentRow === piece.correctRow && 
      piece.currentCol === piece.correctCol
    );

    if (isSolved) {
      setTimeout(() => {
        alert('Gratulálok! Megoldottad a puzzlet!');
      }, 100);
    }
  }

  getPieceStyle(piece: PuzzlePiece): any {
    return {
      'background-image': `url(${piece.imageUrl})`,
      'background-position': `-${piece.correctCol * this.pieceSize}px -${piece.correctRow * this.pieceSize}px`,
      'background-size': `${this.cols * this.pieceSize}px ${this.rows * this.pieceSize}px`,
      'width': `${this.pieceSize}px`,
      'height': `${this.pieceSize}px`,
      'transform': `translate(${piece.currentCol * this.pieceSize}px, ${piece.currentRow * this.pieceSize}px)`,
      'position': 'absolute'
    };
  }
}

interface PuzzlePiece {
  correctRow: number;
  correctCol: number;
  currentRow: number;
  currentCol: number;
  imageUrl: string;
}