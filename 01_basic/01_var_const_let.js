const accountID = 12345
let accountEmail = "abc@gmail.com"
var accoutPassword =" 11111"
accoutCity = "Indore"

// accountID = 2 // error comes becouse costact can not be change 
accountEmail = "gfghsf@.com"
accoutPassword ="125455 "
accoutCity ="jaipur"


console.log(accountID); // for more console it is not good 

console.table([accountEmail, accountID, accoutPassword, accoutCity])
