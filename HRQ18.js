function designerPdfViewer(h, word) {
    // Write your code here
let arr=[]

var n=0;
    for (let i = 0; i < word.length; i++) {
        var asci=word.charCodeAt(i)
        asci=asci-97;
        arr.push(h[asci])
 }
var n=Math.max.apply(null,arr)
let l=arr.length;
console.log(l*n);

}

var word = 'zbkkfhwplj';
let h="6 5 7 3 6 7 3 4 4 2 3 7 1 3 7 4 6 1 2 4 3 3 1 1 3 5";
h=h.split(" ").map(value=>parseInt(value));
//console.log(h);
designerPdfViewer(h,word)