//const tinderUser =new Object{}// object
const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name ="Sam"
tinderUser.isloggedin =false
//console.log(tinderUser);


const regularuser ={
    email: "sam@gmail.com",
    fullname :{
        userfullname: {
            firstname: "hitesh",
            lastname: "done"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname);


const obj1 ={1:"a",2:"b"}

const obj2 ={3:"a",4:"b"}


//const obj3 = Object.assign({},obj1,obj2) // add

const obj3 ={...obj1, ...obj2}
//console.log(obj3);

// const user = [
//     {id :1 ,
//         //email : j212@gmail.com
//     }{id :1 ,
//         email : 212@gmail.com
//     }
//     {id :1 ,
//         email : 212@gmail.com
//     }{id :1 ,
//         email : 212@gmail.com
//     }
//     {id :1 ,
//         email : 212@gmail.com
//     }
// ] 

// user[1].email

console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedin'));
