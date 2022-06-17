function divisibleSumPairs(n, k, ar) {
    // Write your code here
var d=0;
var r=0;
    for (let i = 0; i <=ar.length; i++) {
        for (let j = 0; j < ar.length; j++) { 
       if(ar[i]<ar[j]){
         d=ar[i]+ar[j];
         d=d/k;
        if (Number.isInteger(d)) {
           r=r+1;
           console.log("d");
        }}}}
return r;
}
let ar = [1,2,3,4,5,6]
let n=6
let k=3
console.log(divisibleSumPairs(n,k,ar));