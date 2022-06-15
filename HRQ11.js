function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    const str="NO";
    const str1="YES";
    var s1=0+x1;
    var s2=0+x2;
    if(x2>=x1&&v2>=v1)
    {
        return str;
    }
    for (let i = 0; i < 1000; i++) {
        s1=v1+s1;
        s2=+v2+s2;
        if (s1==s2) {
            return str1;
        }
    }
    
    return str;

}

let x1=4523;
let v1=8092;
let x2=9419;
let v2=8076;
console.log(kangaroo(x1, v1, x2, v2));