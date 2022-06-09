function plusMinus(arr) {
        // Write your code here
    let len=arr.length;
    let n=0;
    b=0;
    c=0;
    for(let x in arr)
    {
    if(arr[x]<0)
    {
        n=n+1;
    }
    else if(arr[x]>0)
    {
        b=b+1;
    }
    else if(arr[x]==0)
    {
            c=c+1;
    }
    else
    {
        console.log("invlsid");
    }
}


b=b/len;
b=b.toFixed(6);
console.log(b);
n=n/len;
n=n.toFixed(6);
console.log(n);
c=c/len;
c=c.toFixed(6);
console.log(c);

}

let arr=[4,2,-1,-3,0,9]

// console.log(plusMinus(arr));
plusMinus(arr);