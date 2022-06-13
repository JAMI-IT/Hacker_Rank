function timeConversion(s) {
    // Write your code here
    var h1 = Number(s[1] - '0');
    var h2 = Number(s[0] - '0');
    var hh = (h2 * 10 + h1 % 10);
    
    var st="";
    if (s[8]=="A") {
        if(hh==12){
           let h3="00";
        for(let i=2;i<=7;i++)
        st=st.concat(s[i])
        // console.log(h3+st);
        return (h3+st)
    }
    else{
        hh="0"+hh;
            for(let i=2;i<=7;i++)
            st=st.concat(s[i])
            // console.log(hh+st);
            return (hh+st);
        }    
    }
    else{
        if (s[8]=="P") {
            if(hh==12)
            {
                for(let i=2;i<=7;i++)
                st=st.concat(s[i])
                // console.log(hh+st);
            return (hh+st);

            }
    else{
        hh=hh+12;
        for(let i=2;i<=7;i++)
        st=st.concat(s[i])
        // console.log(hh+st);
        return (hh+st);

    }    
  }
}
}
let s="08:05:45AM"

console.log(timeConversion(s));