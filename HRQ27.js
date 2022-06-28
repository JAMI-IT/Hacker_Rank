
function minimumDistances(a) {
    // Write your code here
    let ind;
    let b=[]
    for (let i = 0; i < a.length; i++) {
           for (let j = i+1; j < a.length; j++) {
                  if(a[i]==a[j]){
                        ind=a.lastIndexOf(a[j])-a.indexOf(a[i])
                        b.push(ind);                           
                  }
           }              
    }
    let m=Math.min.apply(null,b)
    if (m==Infinity) {
           return -1
    }
    else{
           return m
    }
}
let a = [1 ,2 ,3 ,4 ,10]

console.log(minimumDistances(a));  