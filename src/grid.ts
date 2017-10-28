import Cell from './cell';
import MouseHover from './mouseHover';

import * as R from 'ramda';
import * as gridFunctions from './gridFunctions'

export default class Grid  {

    private grid: any;
    private columns: number = 5;
    private rows: number = 5;
    private openSet: any = [];
    private closedSet: any [] = new Array();
    private start: number[][];
    private end: Cell;
    private cellSize: number;
    private mouseHover: MouseHover;

    private noSolutionFlag: boolean = false;

    constructor(cols: number, rows: number, size: number) {
        this.columns = cols;
        this.rows = rows;
        this.cellSize = size;

        this.mouseHover = new MouseHover()

        this.closedSet = new Array();
        
        this.buildGrid();
        this.buildCells();
        this.calculateStartAndEnd();
        this.openSet.push(this.start);
    }

    private buildGrid(): void {
        this.grid = new Array(this.columns);
        for (var i = 0; i < this.columns; i++) {
            this.grid[i] = new Array(this.rows)
        }
    }

    private buildCells(): any {
        //using forloop as dodgey javascirpt behaviour with foreaching thorugh a new'd array
        for (var i = 0; i < this.columns; i++) {
            for (var j = 0; j < this.rows; j++) {
                this.grid[i][j] = new Cell(i, j, this.columns, this.rows, this.cellSize);
            }
        }
    }

    private calculateStartAndEnd() {
        this.start = this.grid[0][0];
        this.end = this.grid[this.columns-1][this.rows-1];
    }

    public noSolution(): void {
        if (this.openSet.length > 0) {
            this.noSolutionFlag = false;
        } else {
            this.noSolutionFlag = true;
        }
    }

    public hasNoSolution(): boolean {
        return this.noSolutionFlag;
    }

    public drawGrid(): void {
        this.grid.forEach((column: any, columnIndex: number) => {
            column.forEach((row: Cell, rowIndex: number) => {
                row.show(color(90, 90, 90));
            })
        })
    }

    public drawOpenSet(): void {
        this.openSet.forEach((column: any, columnIndex: number) => {
            column.show(color(66, 83, 244));
        })
    }

    public drawClosedSet(): void {
        this.closedSet.forEach((column: any, columnIndex: number) => {
            // column.show(color(244, 66, 66));
        })
    }

    private getHighestFValueIndex(): number {
        return this.openSet.reduce((accumlator: number, currentValue: Cell , index: number, array: Array<Cell>) => {
            return currentValue.f < array[accumlator].f ? index : accumlator;
        }, 0);
    }

    private getNeigbours(): void {

    }

    public step(): void {
        //loop through open set to get greatest f value;
        let winnerFCellIndex = this.getHighestFValueIndex();
        let current = this.openSet[winnerFCellIndex];

        if (R.equals(current, this.end)) {
            // end the loop
        }

        this.openSet = R.reject(R.equals(current), this.openSet);
        this.closedSet = R.insert(this.closedSet.length, current, this.closedSet)
        this.mouseHover.isIntersectingWithBox(this.grid);
    }
}
