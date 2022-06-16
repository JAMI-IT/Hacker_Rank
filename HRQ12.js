function breakingRecords(scores) {
    // Write your code here
    let x=-Infinity;
    let y=Infinity;
    let m=0-1;
    let min=0-1; 
    for (let i = 0; i < scores.length; i++) {
        if (scores[i]>x) {
            x=scores[i];
            m=m+1;
        }
        else {
            if (scores[i]=x) {
                m=m;
            }    
        }
    }
    for (let z = 0; z < scores.length; z++) {
        if (scores[z]<y) {
            y=scores[z];
            console.log(y);
            min=min+1;
        }
        else
        {
        if (scores[z]=x) {
            min=min;
        }
        }
    }
return [m,min];
}

// let a=[3,4,21,36,10,28,35,5,24,42];
let b=[10, 5 ,20 ,20 ,4, 5 ,2 ,25,1]
console.log(breakingRecords(b));