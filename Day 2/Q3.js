// Loops

function vowelsAndConsonants(s) {
    let vowels = '';
    let consonants = '';

    for(let i = 0; i < s.length; i++) {
        if('aeiou'.includes(s[i])){
            vowels += s[i] + '\n';
        } else {
            consonants += s[i] + '\n';
        }
    }

    console.log(vowels + consonants);
}
