
export class View {
  constructor(canvas, board) {
    this.board = board;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.sizeTile = this.findSizeTile(this.canvas.offsetWidth, this.canvas.offsetHeight);
  }

  findSizeTile(width, height) {
    let x = Math.floor(width/this.board.getWidth());
    let y = Math.floor(height/this.board.getHeight());
    return Math.min(x, y);
  }

  paintTile(tile) {
    let x = tile.getX() * this.sizeTile;
    let y = tile.getY() * this.sizeTile;
    let ctx = this.ctx;
    if (tile.isWall()) {
      ctx.fillStyle = "#000000";
    } else {
      ctx.fillStyle = "#FF0000";
    }
    ctx.fillRect(x, y, this.sizeTile-1, this.sizeTile-1);
  }

  paintGrid() {
    let g = this.board.grid;
    for (let j = 0; j<this.board.getHeight(); j++) {
      for (let i = 0; i<this.board.getWidth(); i++) {
        this.paintTile(g[j][i]);
      }
    }
  }
}
