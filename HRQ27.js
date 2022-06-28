function minimumNumber(password) {
    // Return the minimum number of characters to make the password strong
    let n=0;
    let no=4
    let special_characters = "!@#$%^&*()-+"
    let length =password.length;
    if (length <6) {
        return (6-length) 
    }
    else{
       for (let i = 0; i < password.length; i++) {
            if (password[i]===password[i].toUpperCase()) {
                n=n+1;
                if(n==1)
                {
                    no=no-1
                }
            }   
            if (password[i]===password[i].toLowerCase()) {
                n=n+1;
                if(n==2)
                {
                    no=no-1
                }
            }  
            for (let j = 0; j < special_characters.length; j++) {
                    if (password[i]==special_characters[j]) {
                        no=no-1;
                        break ;
                    }       
            }  
            for (let j = 0; j < numb.length; j++) {
                            
            }
       }
    }
    console.log(no);
}

let password="#HackerRank"

console.log(minimumNumber(password));