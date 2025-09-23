// let a= 10
// const b= 20
// var c =30


{}//scopes   (block scopes)
 let a=300 //globel scopes 
if(true){
    let a= 10
const b= 20
//var c =30

// console.log("INNER : ",a);

}

// console.log(a)
//console.log(b)
//console.log(c) // var kahi bhiuse nhi karna hai vo kahi se bhi value le kr use kar leta he mtlb kahi ke bhi scopes ki value leleta he 
// console.log(a)




function one(){
    const username = "Mahesh"

    function two(){
        const website ="youtube"
        // console.log(username);
        
    }
    // console.log(website);

    // two()
    
}

one()

// inner can access the outer data or a function but outer can not aceess inner function properties.


if (true){
    const username ="Mahesh"
    if(username === "Mahesh"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);



// +++++++++++++++++++ interesting +++++++++++++++++++++



// function addone(num){
//     return num + 1
// }

// addone(5)


// const addtwo = function(num){
//     return num +2
// }

// addtwo(5) // koi output nhi aa raha he 

addone(5)
function addone(num){
    return num + 1
}



addtwo(5)
const addtwo = function(num){
    return num +2
}
//error aay becouse function ko diclreation se pahle access kar rahe he 

