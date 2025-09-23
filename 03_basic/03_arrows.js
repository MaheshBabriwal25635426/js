// const user = 
// {
//     username : "Mahesh",
//     bprice : 999,

//     welcomeMessage: function()
//      {
//         console.log(`${this.username} ,Welcome to website`);
        
//      }
// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()



// console log laga kr kya output aayega 


// const user = 
// {
//     username : "Mahesh",
//     bprice : 999,

//     welcomeMessage: function()
//      {
//         console.log(`${this.username} ,Welcome to website`);
//         console.log(this);
        
//      }
// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// output
// Mahesh ,Welcome to website
// {
//   username: 'Mahesh',
//   bprice: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam ,Welcome to website
// {
//   username: 'sam',
//   bprice: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }



const user = 
{
    username : "Mahesh",
    bprice : 999,

    welcomeMessage: function()
     {
        console.log(`${this.username} ,Welcome to website`);
        // console.log(this);
        
     }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()


        // console.log(this);


        // output {}


// function chai(){
//     console.log(this);
    
// }
// chai()


 // arrow funtion 
// const chai = () => {
//     let username ="Mahesh"
//     console.log(this.username);
    
// }
// chai()

// const addtwo = (num1, num2) => {
//     return num1+ num2
// }

// console.log(addtwo(2,1));
//another syntex

const addtwo = (num1, num2) =>   num1+ num2

console.log(addtwo(2,1));
