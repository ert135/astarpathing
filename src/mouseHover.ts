import Cell from './cell';
import * as R from 'ramda';

export default class MouseHover {

    constructor() {

    }

    public isIntersectingWithBox(grid: Array<Array<Cell>>): void {
        //go through every box and check if the mosue is intersecting with any of them 
        let mouseXWithinBox = (cell: Cell) => {
            if(this.between(mouseX, cell.x * cell.height, (cell.x * cell.height + cell.height)))  {
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
                    cell.hover(color(244, 66, 66));
                }
            });
        });
    }

    private between(x: number, min: number, max: number) : boolean {
        return x >= min && x <= max;
    }

}
