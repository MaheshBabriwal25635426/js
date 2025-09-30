const coding =["js" , "ruby" , "python" , "java" , "c++"]

// coding.forEach( function(item) {
//     console.log(item);
// });

// coding.forEach( (item)=> {
//      console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(index, item, arr);
// });

const myObject = [
    {
        languagename: 'javascript',
        fileExtension: 'js'
    },
    {
        languagename: 'ruby',
        fileExtension: 'rb'
    },
    {
        languagename: 'python',
        fileExtension: 'py'
    },
    {
        languagename: 'java',
        fileExtension: 'java'
    },
    {
        languagename: 'c++',
        fileExtension: 'cpp'
    }
]
myObject.forEach( (item) => {
    console.log(item.languagename);
});