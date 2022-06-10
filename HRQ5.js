function staircase(n) {
    // Write your code here
    let sp="";
    console.log("asd");
    for (let i = 1; i <= n; i++) {
        for (let s = n - 1; s >= i; s--) {
       sp +=" ";
 }
 for (let h = 1; h <= i; h++) {
  sp +="#";
 }
 sp +="\n";
}

console.log(sp);

}
let n=6;
staircase(n);