function catAndMouse(x, y, z) {

    let def;
    let def1;
    def=x-z;
    def1=y-z;
    if (def<0) {
        def=-def;
    }
    if (def1<0) {
        def1=-def1;
    }

    if (x>y) {
        console.log("Cat A");
    }
    else if(x=y){
        
    }
    else{
        console.log("Cat B");
    }
    

}

let x=1;
let y=2;
let z=3;
catAndMouse(x,y,z)