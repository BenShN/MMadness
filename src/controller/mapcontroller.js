class MapController {
    //Access grid by grid[x][y]
    //grid[x][y] stores either null or a piece object
    grid = [];
    constructor(numCols, numRows) {
        //Construct a 2d array with numRows row and numCols columns
        for(let i = 0; i < numCols; i++) {
            //For each column construct the rows
            for(let j = 0; j < numRows; j++) {
                grid[i][j] = NULL;
            } 
        }
    }

}

export default MapController;