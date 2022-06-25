function rotateLeft(d, arr) {
    // Write your cod
    for (let i = 0; i < d; i++) {
        let sh=arr.shift()
        arr.push(sh);
        
    }

console.log(arr);
}

let arr=[1,2,3,4,5]
let d=4
rotateLeft(d,arr)