function bonAppetit(bill, k, b) {
    // Write your code here
    var sum=0;
    var def;

    for (let i = 0; i <bill.length; i++) {
        if (bill[i]==bill[k]) {
            sum=sum;
        }        
        else{
            sum=sum+bill[i];
        }
    }
    sum=sum/2;
    def=b-sum;
    if (def==0) {
        console.log("Bon Appetit");
    }
    else {
        if (def<0) {
            console.log(-def);
        }
        else{
        console.log(def);
    }
    }
 
}

let bill=[3,10,2,9,1];
let k=1;
let b=7;
bonAppetit(bill,k,b);