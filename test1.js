function migratoryBirds(arr) {
    // Write your code here
    var m=0;
    var Type=[0,0,0,0,0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==1){
            Type[0]=Type[0]+1;
        }
        else if(arr[i]==2){
            Type[1]=Type[1]+1;
        }
        else if(arr[i]==3){
            Type[2]=Type[2]+1;
        }
        else if(arr[i]==4){
            Type[3]=Type[3]+1;
        }
        else if(arr[i]==5){
            Type[4]=Type[4]+1;
        }
    }
    for (let y = 0; y < Type.length; y++) {
        if (Type[y]>m) {
            m=Type[y];
        }        
    }
    let in;
    in=Type.indexOf(m);
    return 
}

let arr=[1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]

console.log(migratoryBirds(arr));