const arguments = process.argv[2];
const number = parseInt(arguments);

if(isNaN(number)) {
    console.log('Inserisci un numero!')
} else {
    console.log(number % 2 === 0 ? 'Pari' : 'Dispari')
}
