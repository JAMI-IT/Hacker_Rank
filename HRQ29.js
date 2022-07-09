function sockMerchant(ar) {
    // Write your code here
    let s=0;
    for (let i = 0; i < ar.length; i++) {
       for (let j = i+1; j < ar.length; j++) {
        if (ar[i]==ar[j])
            s=s+1
            break;
       }        
    }
console.log(s);
}

let ar = ["1 ,1 ,3 ,1 ,2 ,1 ,3 ,3 ,3,3"]
sockMerchant(ar);
