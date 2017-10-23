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

       this.width = cols / cellSize;
       this.height = rows / cellSize;
       console.log('width is ', this.width);
       console.log('height is ', this.height);
    }

    public show(color: any): void {
        stroke(0)
        rect(10, 10, this.width, this.height)
    }
}