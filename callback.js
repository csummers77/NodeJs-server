// a callback is a function for some other function to run.a
// a function to be called after by another function.

// In JS functions are first-class objects.
// that means you can do almost anything with
// a function that you can do with any objects
// pass them
// assign it to a variable
// overwrite it
function x(){
    console.log(typeof(x))
} 
const myFunction = function(n){
    console.log(n);
}
// console.log(myFunction)

function myOtherFunction(callback){
    callback(5);
}
myOtherFunction(myFunction);

$.getJSON(url,(data) =>{
    
})
// somewhere in the bowls of jquery is this...
windows.$ = {};
$.getJSON = function(url, callback){
    // jQuery does something cool with the url (xmlhttprequest)
    // it gets some data back.
    // it calls the data myData
    callback(myData)
}
function n(x){
    return function(y){
        console.log(x+y)
    }
}
function n(y){
    return function(y){
        console.log(y+x)
    }   
}
n(2)(3)