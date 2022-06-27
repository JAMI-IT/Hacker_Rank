function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
let sum=0;
let v=0;
if (p<s) {
    for (let i = p; i >= m; i=i-d) {
        sum=sum+i;
        v=v+1;
    }
    for (let j = sum; j <=s; j=j+m) {
        sum=sum+m;
        v=v+1;
    }
    return v-1;
}
else{
    return v
}
}
let p=100
let d= 19
let m= 1
let s= 180

console.log(howManyGames(p,d,m,s));