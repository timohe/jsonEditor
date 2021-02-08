'use strict';

const fs = require('fs');
let input = fs.readFileSync('countries_de.json');
let parsedInput = JSON.parse(input);

for (let index = 0; index < parsedInput.length; index++) {
	delete parsedInput[index].id;
	delete parsedInput[index].alpha3;
	parsedInput[index].alpha2 = parsedInput[index].alpha2.toUpperCase()
}

// console.log(parsedInput);

var resultArray = parsedInput.map(function (elm) {
	return { value: elm.name, text: elm.alpha2 };
});

console.log(resultArray);
let data = JSON.stringify(resultArray);
fs.writeFileSync('output.json', data);