function gradingStudents(grades) {
    // Write your code here
    var it=40;
for (let i = 0; i < grades.length; i++) {
    if (grades[i]<38) {
        grades[i]=grades[i]
    }
    else
    { 
        if (grades[i]<it) {
            let gr=0;
            gr=it-grades[i];
         if (gr>=3) {
            
                grades[i]=grades[i]+gr;                   
            }
        else
            {
            grades[i]=grades[i]+gr;   
            }
        }
    }
}
return grades
}
var grades=[73,67,38,33]
console.log(grades);
grades=grades.sort();
console.log(grades);
console.log(gradingStudents(grades));