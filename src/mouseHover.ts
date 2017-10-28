import Cell from './cell';
import * as R from 'ramda';

export default class MouseHover {

    constructor(){

    }

    public isIntersectingWithBox(grid: Array<Cell>): void {
        console.log('called here!!!');
        //go through every box and check if the mosue is intersecting with any of them 
        let mouseXWithinBox = (cell: Cell) => {
            if(this.between(mouseX, cell.x, cell.y)) {
                console.log('Shoudl be true!!')
                return true;
            }

            return false;
        }

        let mouseYWithinBox = (cell: Cell) => {
            if(this.between(mouseY, cell.y, cell.y)) {
                console.log('Could be true!!!');
                return true;
            }

            return false;
        }

        grid.forEach((cell: Cell) => {
            if(mouseXWithinBox(cell) === true && mouseYWithinBox(cell) === true){
                cell.show(color(255,255,255));
            }
        })
    }

    private between(x: number, min: number, max: number) : boolean {
        return x >= min && x <= max;
    }

}
