const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros =["superman" , "flash" , "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_newheros =[...marvel_heros, ...dc_heros]
//console.log(all_newheros);

const anotherArr= [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anotherArray = anotherArr.flat(Infinity)
console.log(real_anotherArray);


console.log(Array.isArray("Mahesh"));
console.log(Array.from("Mahesh"));
console.log(Array.from({name:"Mahesh"}));
