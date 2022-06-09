
function aVeryBigSum(ar) {
    // Write your code here
  var sum=0;
  for(let x in ar)
  {
      sum=sum+ar[x];
  }
  return sum;
}

var no=[1,212,1,3,3,24,34,3,2,3,4,234,5,2,3,42,34,2,34,234,24,323];
console.log(aVeryBigSum(no));