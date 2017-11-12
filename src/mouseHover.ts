import Cell from './cell';
import * as R from 'ramda';

export default class MouseHover {

    constructor() {

    }

    public currentCellHover: Cell = null;

    public isIntersectingWithBox(grid: Array<Array<Cell>>): void {
        //go through every box and check if the mosue is intersecting with any of them 
        let mouseXWithinBox = (cell: Cell) => {
            if(this.between(mouseX, cell.x * cell.height, (cell.x * cell.height + cell.height))) {
                return true;
            }

            return false;
        }

        let mouseYWithinBox = (cell: Cell) => {
            if(this.between(mouseY, cell.y * cell.width, (cell.y * cell.width + cell.width))) {
                return true;
            }

            return false;
        }

        grid.forEach((cell) => {
            cell.forEach((cell: Cell) => {
                if (mouseXWithinBox(cell) === true && mouseYWithinBox(cell) === true) {
                    console.log('hovering', cell)
                    cell.hover(color(244, 40, 66));
                    this.currentCellHover = cell;
                }
            });
        });
    }

    private between(x: number, min: number, max: number) : boolean {
        return x >= min && x <= max;
    }

    public mouseClicked = function(): void {
        console.log('Mouse clicked!!!!', this.currentCellHover);
        if (this.currentCellHover) {
            console.log('Cell to click is ', this.currentCellHover);
            this.currentCellHover.onClick();
        }
    }

}
