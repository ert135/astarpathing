//import typescirpt types. 
///<reference path='../p5-global-mode.d.ts'/>

//import grid
import Grid from './grid';
import MouseHover from './mouseHover';
import Cell from './cell';

//extend existing window property, we have to put the draw and setup functinos of the global window object for p5 to work in global mode
declare global {
    interface Window { 
        setup: any;
        draw: any;
        mousePressed: any;
        mouseReleased: any;
        preload: any;
        mouseClicked: any;
        started: boolean;
    }
}

let grid: Grid;
let size = 800;
let started = false;
let mouseHover: MouseHover = null;

let setup = function() {
    createCanvas(size, size);
    grid = new Grid(30,30, size);
    mouseHover = new MouseHover();
}

let draw = function() {
    mouseHover.isIntersectingWithBox(grid.getGrid());
    if (grid.hasNoSolution() === false) {
        grid.drawGrid();
        if(window.started === true) {
            grid.drawOpenSet();
            grid.drawClosedSet();
            grid.step();
            grid.drawPath();
        }
    } else {
        //perform stop procedure
    }
}

window.setup = setup;
window.draw = draw;
window.started = started;