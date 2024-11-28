const arguments = process.argv.slice(2);
const userInput = arguments.join("");

if(!userInput || !isNaN(userInput)) {
    console.log('Inserisci una parola o una frase!')
} else {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for(let i = 0; i < userInput.length; i++) {
        const curChar = userInput[i].toLowerCase();
        if (vowels.includes(curChar)) {
            count++;
        }
    }
    console.log(`La Stringa contiene ${count} vocali!`);
}


