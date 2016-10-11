// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum (a, b) {
	return a + b;
}

var result = sum(4, 6);

console.assert(sum(1 , 2) === 3)
console.log(result);

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg (a, b, c) {
	return (a + b + c) / 3; 
} 

console.log(avg(15, 30, 90))
console.assert(avg(2, 4, 6) === 4)

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength (str) {
	for (var i = 0; i < str.length; i++) {
		return str.length;
	}
}

console.assert(getLength('hello') === 5);
console.log(getLength('The headless horseman has nice hair.'));


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan (a, b) {
	if (a > b) {
		return true; 
	} else {
		return false;
	}
}
console.log(greaterThan(3, 6))
console.assert(greaterThan(2, 1) === true)
console.assert(greaterThan(1, 2) === false)


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet (name) {
	return 'Oh, didn\'t see you there. Hello, ' + name + '!';
}
console.log(greet('Eric'));
console.assert(greet('Bill') === 'Oh, didn\'t see you there. Hello, ' + 'Bill' + '!')


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib (word1, word2, word3, word4) {
	return 'Monty hates the following things ' + word1 + ', ' + word2 + ', ' + word3 + ', and ' + word4 + '.'; 
}
console.log(madlib('Clemson', 'kale', 'quinoa', 'Georgia'));



