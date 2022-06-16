function divisibleSumPairs(n, k, ar) {
    // Write your code here
var d=0;
var r=0;
    for (let i = 0; i <=n; i++) {
        for (let j = 0; j < ar.length; j++) { 
       if(ar[i]<ar[j]){
         d=(ar[i]+ar[j])/k;
        if (Number.isInteger(d)) {
           r=r+1;
        }}}}
return r;
}
let ar = [1, 3, 2, 6, 1, 2]
ar=ar.sort(function(a,b){return a-b});
console.log(ar);
let n=6
let k=3

console.log(divisibleSumPairs(n,k,ar));