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
       console.log('width is ', this.width);
       console.log('height is ', this.height);
       console.log('cell size is ', cellSize);
       console.log('cols is ', cols);
       console.log('rows is ', rows);
    }

    public show(color: any): void {
        fill(color)
        stroke(0)
        rect(this.x * this.width, this.y * this.width, this.width, this.height)
    }
}