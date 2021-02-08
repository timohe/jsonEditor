'use strict';

let filename = 'countries_it.json'
const fs = require('fs');
let input = fs.readFileSync(filename);
let parsedInput = JSON.parse(input);

// remove unwanted properties
for (let index = 0; index < parsedInput.length; index++) {
	delete parsedInput[index].id;
	delete parsedInput[index].alpha3;
	parsedInput[index].alpha2 = parsedInput[index].alpha2.toUpperCase()
}

// rename properties
var resultArray = parsedInput.map(function (elm) {
	return { value: elm.alpha2, text: elm.name };
});
let data = JSON.stringify(resultArray);
fs.writeFileSync(`${filename}_output.json`, data);