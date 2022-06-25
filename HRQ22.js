function angryProfessor(k, a) {
    // Write your code here
    let s=0;
    let r=0;
    for (let i = 0; i < a.length; i++) {
    if (a[i]<=0) {
            s=s+1
        }       
    }
    if (s>=k) {
        return "NO"
    }
    else{
        return "YES";
    }

}
let k=3;
let a=[-1 ,-3 ,4 ,2]

console.log(angryProfessor(k,a));