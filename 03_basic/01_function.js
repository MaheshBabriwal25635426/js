// console.log("m");
// console.log("a");
// console.log("h");
// console.log("e");
// console.log("s");
// console.log("h");



//keyword  name 
function sayMyname(){
    console.log("m");
console.log("a");
console.log("h");
console.log("e");
console.log("s");
console.log("h");
}


//refrence : sayMyname
//sayMyname() 
// commment ke bad print is liye nhi ki vo abhi function me he if vo function ke bahar hota to vo print ho jata 


// function addtwonum(num1,num2)
// {
//     console.log(num1+num2);
    
// }
//print
//addtwonum(2,3) //output 5
//addtwonum(2,"3")  //output 23
//addtwonum(2,"a") //output 2a

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result); 


// function loginuserMessage(username ){
//     return `${username} just logged in`
// }

// console.log( loginuserMessage("hitesh"));


function loginUserMessage(username ){
    if(username === undefined){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//  console.log( loginUserMessage());




function calculateCartPrice(...num1 ){ //(...rest oprator)... 3 dot ka mtlb he vo jobhi enetity rahegi use print kar dega 
    return num1
}
// console.log(calculateCartPrice (200,300,400,500));


const user ={
    username :"mahesh",
    cprice : 177
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and cprice is ${anyobject.cprice}`);
    
}
//  handleObject(user)

 handleObject({
    username : "Sam",
   
    cprice :299
 })


 const myNewArray =[200,300,400,500]

 function returnSecondValue(getArray){
    return getArray[2]
 }

 console.log(returnSecondValue([200,300,400,500]));
 
