function compareTriplets(a,b) {
    // Write your code here

    var x=0;
var y=0;
    for (let i = 0; i < a.length; i++) {
     
        if(a[i]>b[i])
        {
            x=x+1;
        }
        else if(a[i]==b[i])
        {
            console.log("sads");
        }
        else if(a[i]<b[i])
        {
           y=y+1;
        }
    
    }
return [x,y];
}

var a=[22,12,3];
var b=[12,32,12];

const result=compareTriplets(a,b);

console.log(result);