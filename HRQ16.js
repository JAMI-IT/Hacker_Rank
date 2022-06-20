function bonAppetit(bill, k, b) {
    // Write your code here

var total = bill.reduce((a,b) => a+b);
total=total-bill[k];

if (total/2==b) {
    console.log("Bon Appetit");
}
else{
    console.log(b-total/2);
}

}

let bill=[3,10,2,9];
let k=1;
let b=7;
bonAppetit(bill,k,b);