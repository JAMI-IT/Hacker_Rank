function camelcase(s) {
    // Write your code here
    let v=0;
    if (s[0]===s[0].toLowerCase()) {
        v=v+1;
    }
for (let i = 0; i < s.length; i++) {
  
    if (s[i]===s[i].toUpperCase()) {
        v=v+1;
    }    
}
// console.log(v);
return v;
}
let s="saveChangesInTheEditor"

console.log(camelcase(s));