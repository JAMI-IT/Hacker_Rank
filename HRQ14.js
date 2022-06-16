function migratoryBirds(arrr) {
    // Write your code here
    
    var Type1=0;
    var Type2=0;
    var Type3=0;
    var Type4=0;
    var Type5=0;
    for (let i = 0; i < arrr.length; i++) {
        if(arrr[i]==1)
        {
            Type1=Type1+1;
        }
        else if(arrr[i]==2)
        {
            Type2=Type2+1;
        } 
        else if(arrr[i]==3)
        {
            Type3=Type3+1;
        } 
        else if(arrr[i]==4)
        {
            Type4=Type4+1;
        } 
        else if(arrr[i]==5)
        {
            Type5=Type5+5;
        }
    }
    for (let x = 1; x <= 5; x++) {
       
    }

console.log(Type2);
}

let arrrr=[1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]

migratoryBirds(arrrr)