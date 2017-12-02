import Grid from './grid';

export default class Cell {

    public x: number;
    public y: number;
    public f = 0;
    public g = 0;
    public h = 0;
    public width: number;
    public height: number;
    private neighbors: any;
    private grid: Array<Array<Cell>>;
    private rows: number;
    private columns: number;
    public previous: Cell;
    public wall: boolean = false;
    private center: p5.Vector;

    private LURDMoves = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1]
    ];

    private DiagonalMoves = [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1]
    ];

    constructor(x: number, y: number, cols: number, rows: number, cellSize: number, grid: Array<Array<Cell>>) {
        this.grid = grid;
        this.x = x;
        this.y = y;

       this.width = cellSize / cols;
       this.height = cellSize / rows;
       this.neighbors = new Array();
       this.calculateCenter();
    }

    private calculateCenter(): void {
        this.center = new p5.Vector(this.x * this.width + this.width / 2, this.y * this.height + this.height / 2);
    }

    public drawFValue(): void {
        let CENTER: any
        fill(0);
        textSize(18);
        textAlign(CENTER);
        text(this.f.toString().substring(0,2), this.center.x -9, this.center.y + 7);
    }

    public show(color: p5.Color): void {
        fill(color);
        if (this.wall === true) {
            fill(0);
        }
        //if cell is in the open set, draw the f value
        stroke(0);
        rect(this.x * this.width, this.y * this.height, this.width, this.height);
    }

    public hover(color: p5.Color): void {
        fill(color);
        stroke(54);
        rect(this.x * this.width, this.y * this.height, this.width, this.height);
    }

    public onClick(): void {
        // this.wall ? this.wall = false : this.wall = true;
        this.wall = true;
    }

    private getNode(x: number, y: number): any {
        if (
            x < 0 || y >= this.grid.length ||
            x < 0 || y >= this.grid[0].length) {
            return null;
        }

        if (
            y < 0 || x >= this.grid.length ||
            y < 0 || x >= this.grid[0].length) {
            return null;
        }

        return this.grid[x][y];
    }

    public populateNeighbors() {
        for (var i = 0; i < 4; i++) {
            const node = this.getNode(this.x + this.LURDMoves[i][0], this.y + this.LURDMoves[i][1]);
            if (node) {
                this.neighbors.push(node);
            }
        }
        for (var i = 0; i < 4; i++) {
            const node = this.getNode(this.x + this.DiagonalMoves[i][0], this.y + this.DiagonalMoves[i][1]);
            if (node) {
                this.neighbors.push(node);
            }
        }
    }

    public getNeighbors(): Array<Cell> {
        return this.neighbors;
    }
    
}