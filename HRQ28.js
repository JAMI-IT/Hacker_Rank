function cutTheSticks(arr) {
  // Write your code here
  for (let a=arr.length;  a>0;--a) {
    let i = 0;
    var n = [];
    var no = 0;
    console.log(arr.length);
    let m = Math.min.apply(null, arr);
    while (i < arr.length) {
      if (arr[i] === m) {
         arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    n=n.push(arr.length)
  }
  console.log(n);

}
let arr = [5, 4, 4, 2, 2,8];
console.log(cutTheSticks(arr));