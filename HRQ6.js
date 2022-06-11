
function miniMaxSum(arr) {
    // Write your code here
let max=0;
let min=0;
    arr.sort(function(a,b){return a-b});
    console.log(arr);
    for (let i = 1; i < arr.length; i++) {
        max=max+arr[i];
    }
    for (let x = 0; x < arr.length-1; x++) {
        min=min+arr[x];
    }
    console.log(min,max);
}
var arr=[1,30,5,4,2]
miniMaxSum(arr);