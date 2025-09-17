// let a= 10
// const b= 20
// var c =30


{}//scopes   (block scopes)
 let a=300 //globel scopes 
if(true){
    let a= 10
const b= 20
//var c =30

console.log("INNER : ",a);

}

// console.log(a)
//console.log(b)
//console.log(c) // var kahi bhiuse nhi karna hai vo kahi se bhi value le kr use kar leta he mtlb kahi ke bhi scopes ki value leleta he 
console.log(a)
