function icecreamParlor(m, arr) {
    // Write your code here
    let ar=[];
    for (let i = 0; i < arr.length; i++) {
        for (let j =i+1; j < arr.length; j++) {
            if(arr[i]+arr[j]==m)
            ar.push(i+1,j+1)
        }  
    }
return ar;

}

let cost = [2, 2,4, 3]
let m=4;
console.log(icecreamParlor(m,cost));