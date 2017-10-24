//import typescirpt types. 
///<reference path='../p5-global-mode.d.ts'/>

//import grid
import Grid from './grid';

//extend existing window property, we have to put the draw and setup functinos of the global window object for p5 to work in global mode
declare global {
    interface Window { 
        setup: any;
        draw: any;
        mousePressed: any;
        mouseReleased: any;
        preload: any;
        mouseClicked: any;
    }
}

let grid: Grid;
let size = 800;

let setup = function() {
    createCanvas(size, size);
    grid =  new Grid(30,30, size);
}

let draw = function() {
    if (grid.hasNoSolution() === false) {
        grid.drawGrid();
        grid.drawOpenSet();
        grid.drawClosedSet();
        grid.step();
    } else {
        //perform stop procedure
    }
}

let mouseClicked = function() {

}

window.setup = setup;
window.draw = draw;
window.mouseClicked = mouseClicked;
