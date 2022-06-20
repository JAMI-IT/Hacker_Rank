let str= "jami";
let arr=[]
for (let i = 0; i < str.length; i++) {
       var asci=str.charCodeAt(i)
       asci=asci-97;
       arr.push(asci)
}
console.log("Length Of the string ::");
console.log(str.length+1);

console.log("Ascci Code array");
console.log(arr);