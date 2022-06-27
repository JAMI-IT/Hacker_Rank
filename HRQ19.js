function utopianTree(n) {
    // Write your code here
    let sum=0;
    let sum2=0;
    let arr=0;
for (let i = 0; i < n; i++) {
    if (n%2==0) {
        sum=n-1;
        sum=sum*2+1;
        if (sum<0) {
            sum=-sum;
        }
        arr=sum
    }    
    else{
        sum2=sum*2;
        arr=sum2;
    }
}
return (arr);
}

let n=[0,1]

console.log(utopianTree(1));