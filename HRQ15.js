function countingValleys(steps, path) {
    // Write your code here
   let Alt=0;
   let down=0;
   for (let i = 0; i < steps.length; i++) {
        if (steps[i]=="U") {
            Alt=Alt+1;
        }    
        else if (steps[i]=="D") {
            down=down+1;
        }
   }
}

let steps = ["U","D","D","D","U","D","U","U"]

console.log(countingValleys(steps));