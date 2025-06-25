
// Immediately Invoked Function Expressions (IIFE)
// this function will automeetically invoked when the program runs 
// this is required because we dont want to pollute our environment from global variable 



// this is a named IIFE function 
(function test () {
    console.log("connected ")
})();


// this is a unnamed IIFE function 
(  ()=>{
    console.log("connected again ")
})()
