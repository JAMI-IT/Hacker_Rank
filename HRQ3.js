var matrixExample = [
    [ 1, 2, 3, 4 ],
    [ 4, 5, 6, 5 ],
    [ 7, 8, 9, 7 ],
    [ 7, 8, 9, 7 ]
  ];
 
 function sumUpDiagonals(matrix) {
   var sumDiagonals = {main: 0, second: 0},
     matrixLength = matrix.length;
 
   for (var i = 0; i < matrixLength; i++) {
     sumDiagonals.main += matrix[i][i];
     sumDiagonals.second += matrix[i][matrixLength-i-1];
   }
   return (sumDiagonals.main-sumDiagonals.second)
 }
 
 console.log(sumUpDiagonals(matrixExample))