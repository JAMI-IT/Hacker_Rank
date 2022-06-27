function hurdleRace(k, height) {
    // Write your code here
    let det=0;
    let s=height.sort(function(a,b){return b-a})
    if (s[0]<k) {
        return 0;
    }
    else{
        def=s[0]-k;
    }
    return def;
}
// 4
// 1 6 3 5 2
// 7
// 2 5 4 5 2
let height=[2 ,5 ,4 ,5 ,2]
let k=7
console.log(hurdleRace(k,height));