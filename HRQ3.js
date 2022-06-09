const arr = [
    [1, 3, 4, 2],
    [4, 5, 33, 5],
    [5, 2, 26, 4],
    [8, 2, 9, 3]
 ];
 const diagonalProduct = arr => {
    let fsum = 0;
    let ssum=0;
    let max=arr.length;
    for(let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr[i].length; j++){
          if(i === j){
             fsum += arr[i][j];
            ssum +=arr[i][max-j-1];
          };
       };
    };
    let total=fsum-ssum;
    if(total<0)
    {
        total=total*-1;
    }

    return (total);
 };

 console.log(diagonalProduct(arr));