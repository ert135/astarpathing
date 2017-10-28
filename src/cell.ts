import Grid from './grid';

export default class Cell {

    public x: number;
    public y: number;
    public f = 0;
    public g = 0;
    public h = 0;
    public width: number;
    public height: number;
    private neighbors: Array<Cell>;
    private grid: Array<Array<Cell>>;

    constructor(x: number, y: number, cols: number, rows: number, cellSize: number, grid: Array<Array<Cell>>) {
        this.grid = grid;
        this.x = x;
        this.y = y;

       this.width = cellSize / cols;
       this.height = cellSize / rows;
       this.addNeighbors();
    }

    public show(color: p5.Color): void {
        fill(color);
        stroke(0);
        rect(this.x * this.width, this.y * this.height, this.width, this.height);
    }

    public hover(color: p5.Color): void {
        fill(color);
        stroke(54);
        rect(this.x * this.width, this.y * this.height, this.width, this.height);
    }

    private addNeighbors(): void {
        this.neighbors = new Array();

        this.neighbors.push(this.grid[this.x+1][this.y]);
        this.neighbors.push(this.grid[this.x+1][this.y]);
        this.neighbors.push(this.grid[this.x+1][this.y]);
        this.neighbors.push(this.grid[this.x+1][this.y]);
    }

    public getNeighbors(): Array<Cell> {
        return this.neighbors;
    }
    
}