function utopianTree(n) {
    // Write your code here
    let no=1;
    let sum=0;
for (let i = 0; i < n.length; i++) {
    if (no==1) {
        if (sum==0) {
            sum=1;
            no=0;
        }
       else{
            sum=n[i]*2
       }
    }
    else{
        console.log("SD");
        sum=sum+1
        no=1;
    }
}
console.log(sum);
}

let n=[0,1,4]
utopianTree(n);