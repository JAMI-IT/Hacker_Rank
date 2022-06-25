function utopianTree(n) {
    // Write your code here
    var sum=0;
    var sum2=0;
    var arr=0;
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
return (arr);
}

let n=[0,1,2,3,4,5]
for (let i = 0; i < n.length; i++) {
    
    console.log(utopianTree(n[i]));
}