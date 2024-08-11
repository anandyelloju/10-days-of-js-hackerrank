// Try, Catch and Finally

function reverseString(s) {
    try {
        console.log(s.split('').reverse().join(''))
    }
    catch(error) {
        console.log(error.message + '\n' + s);
    }
}