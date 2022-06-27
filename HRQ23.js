function findDigits(n) {
    // Write your code here
    let va= n.toString();
    var s=0;
    // let a=parseInt(n)
for (let i = 0; i < va.length; i++) {
    if (va%va[i]==0) {
        s=s+1;
    }    
}
return s
}
let n=12;

console.log(findDigits(n));