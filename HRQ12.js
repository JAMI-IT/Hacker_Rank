function breakingRecords(scores) {
    // Write your code here
    var m=scores[0];
    var min=scores[0];
    var maxi=0;
    var mini=0;
for (let i = 0; i < scores.length; i++) {
  
     if(scores[i]>m){
        m=scores[i];
        maxi=maxi+1;
    }  
    else if(scores[i]<min){
        min=scores[i];
        mini=mini+1;
    }  

}
return [maxi,mini]

}

let scores=[3 ,4 ,21 ,36 ,10 ,28 ,35 ,5 ,24 ,42]

console.log(breakingRecords(scores));