export default class Cell {

    public x: number;
    public y: number;
    public f = 0;
    public g = 0;
    public h = 0;
    private width: number;
    private height: number;

    constructor(x: number, y: number, cols: number, rows: number, cellSize: number) {
        this.x = x;
        this.y = y;

       this.width = cellSize / cols;
       this.height = cellSize / rows;
    }

    public show(color: any): void {
        fill(color)
        stroke(0)
        rect(this.x * this.width, this.y * this.height, this.width, this.height)
    }
}