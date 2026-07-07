// 2D ARRAY = multi-dimensional array that stores a matrix
//            of data in rows and columns.
//            useful for games, spreadsheets, or representing images


//            [x, 0, x]
//            [o, x, o]
//            [x, o, x]

const matrix = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];

matrix[0][0] = 'X';
matrix[0][1] = 'O';
matrix[0][2] = 'X';

matrix[1][0] = 'O';
matrix[1][1] = 'X';
matrix[1][2] = 'O';

matrix[2][0] = 'O';
matrix[2][1] = 'X';
matrix[2][0] = 'O';




for(let row  of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
}