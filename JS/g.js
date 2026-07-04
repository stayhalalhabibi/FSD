// VARIABLE SCOPE =  where a variable is recogined and accessible (local vs global)

let x = 10; // global variable

function1(); 

function function1(){
    let x = 29;
    console.log(x);
}

function function2(){
    let y = 20; // local variable
    console.log(y);
}