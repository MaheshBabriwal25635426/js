// for of loop

// ["","", "", "", ""]
// [{}, {}, {}, {}, {}]

const arr = [10, 20, 30, 40, 50];

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
}

//maps

const map = new Map();
map.set('name', 'Bruce')
map.set('age', 30)
map.set('city', 'Gotham')

for (const keyValue of map) {
    //  console.log(keyValue);
}

// for (const [key, value] of map) {
//     console.log(`Key is ${key} and value is ${value}`);
// }


const myObject = {
    name: 'Clark',
    age: 28,
    city: 'Metropolis'
}

for (const [key, value] of Object.entries(myObject)) {
    console.log(`Key is ${key} and value is ${value}`);
}