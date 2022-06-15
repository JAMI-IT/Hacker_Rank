function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here\
    var ap=0;
    var ora=0;
    for (let i = 0; i < apples.length; i++) {
       apples[i]=apples[i]+a;
    }
    for (let x = 0; x < apples.length; x++) {
        oranges[x]=oranges[x]+b;
     }

     for (let y = 0; y <apples.length ; y++) {

        if (apples[y]>=s&&apples[y]<t) {
            ap=ap+1;
        }
     }
     for (let z = 0; z <oranges.length ; z++) {

        if (oranges[z]>=s&&oranges[z]<t) {
            ora=ora+1;
        }
     }
     console.log(ap);
     console.log(ora);
}

let app=[2,4,1];
let org=[3,-5,9]
let a=5;
let b=5;
let s=7;
let t=11;
console.log(countApplesAndOranges(s,t,a,b,app,org));