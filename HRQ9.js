function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i <=60; i++) {

        if (grades[i]<38) {
            grades[i]=grades[i];
        }
        else{
        for (let x = 0; x <=100; x=x+5) {
            if(grades[i]<=x)
            {
                let gr;
                gr=x-grades[i];
                if (gr>=3) {                    
                 grades[i]=grades[i];
                }
                else{
                grades[i]=gr+grades[i];
            
            }
            break;
            }
            
        }
    }
}
return grades;
}
var grades=[73,67,38,33]
console.log(gradingStudents(grades));
