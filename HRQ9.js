function gradingStudents(grades) {
    // Write your code here
    
    for (let i = 40; i < 100; i=i+5) {
        for (let x = 0; x < grades.length; x++) {
           if (grades[x]<38) {
            grades[x]=grades[x];
           }
           else
           {
            if (grades[x]<=i) {
                let gr=i-grades[x]
                if (gr>=3) {
                    grades[x]=grades[x];
                    
                }
                else
                {
                    grades[x]=grades[x]+gr;
                }
            }
           }
        }        
    }
return grades

}

var grades=[73,67,38,33]
console.log(gradingStudents(grades));
