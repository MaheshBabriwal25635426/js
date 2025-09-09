//singleton 

//object literals

const mySym = Symbol("key1")


// const jsuser ={
//     name: "Mahi", //name automatic string me convert kr dega 
//     age: 18,
//     location: "Indore",
//     email: "mahi@gmail.com",
//     isLoggedIn: false,
//     lastloginDays: ["Monday", "Sunday"],
//     "Full name": "Mahi babriwal",
//     //mySym:"mykey1", //object
//     [mySym]:"mykey1" //symbol key 

// }
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["Full name"]); // mdn datatypes for more information

//console.log(jsuser.mySym);

//console.log(typeof jsuser.mySym); //give string but we want Symbol than ,

//console.log(jsuser[mySym]);


//jsuser.email ="mahesh@gmail.com"
//Object.freeze(jsuser)// do not chsange after this frizee

//jsuser.email ="gjcj@gmail.com"

// console.log(jsuser);
// console.log();
const jsuser ={
    name: "Mahi"
}
jsuser.greeting = function (){
    console.log("Hello JS user");
    
}
jsuser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());