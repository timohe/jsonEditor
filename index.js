'use strict';

let filename = 'countries_fr.json'
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
let resultArray = parsedInput.map(function (elm) {
	// change this
	return { [elm.alpha2]: elm.name };
});

// put all data in the same object
let oneObject = {};
for (var i = 0; i < resultArray.length; i++) {
	oneObject[Object.keys(resultArray[i])] = resultArray[i][Object.keys(resultArray[i])];
}

let data = JSON.stringify(oneObject);
fs.writeFileSync(`${filename}_output.json`, data);