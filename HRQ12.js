function breakingRecords(scores) {
    // Write your code here
    let x=-Infinity;
    let y=Infinity;
    let m=0-1;
    let min=0; 
    for (let i = 0; i < scores.length; i++) {
        if (scores[i]>x) {
            x=scores[i];
            m=m+1;
        }
        else if (scores[i]<y) {
            y=scores[i];
            min=min+1;
        }
        else {
            if (scores[i]=x) {
                m=m;
            }    
        }
    }
return [m,min];
}
let a=[3,4,21,36,10,28,35,5,24,42];
console.log(breakingRecords(a));