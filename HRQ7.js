function birthdayCakeCandles(candles) {
    // Write your code here
    let no=0;
 let max=0;
  for (let i = 0; i < candles.length; i++) {
    if (max<candles[i]) {
        max=candles[i];
    }    
  }
  for (let x = 0; x < candles.length; x++) {
        if (max==candles[x]) {
            no=no+1;
        }
  }
  console.log(no);
}

let arr =[1,21,2,3,4,5,21,8,216,9]

birthdayCakeCandles(arr);