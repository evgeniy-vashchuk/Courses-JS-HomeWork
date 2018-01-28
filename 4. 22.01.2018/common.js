// Home Work #4 (22.01.2018)

// Task 1 =========================

let day = 25;

switch (true) {
	case day > 0 && day <= 10:
	alert('Первая декада месяца!');
	break;

	case day > 0 && day <= 20:
	alert('Вторая декада месяца!');
	break;

	case day > 0 && day <= 30:
	alert('Третья декада месяца!');
	break;

	default:
	alert('Не правильное число!');
	break;
}

// Task 2 =========================

let month = 5;

switch (true) {
	case month > 0 && month === 1 || month === 2 || month === 12:
	alert('Зима');
	break;

	case month > month === 3 || month === 4 || month === 5:
	alert('Весна');
	break;

	case month > month === 6 || month === 7 || month === 8:
	alert('Лето');
	break;

	case month > month === 9 || month === 10 || month === 11:
	alert('Осень');
	break;

	default:
	alert('Такого месяца нет в календаре!');
	break;
}

// Task 3 =========================

let string = 'abcdea';
	foundLetter = string[0];

if (foundLetter === 'a') {
	alert ('да');
} else {
	alert ('нет');
}

// Task 4 =========================

let stringOfNumbers = '12345';

switch (true) {
	case stringOfNumbers[0] === '1' || stringOfNumbers[0] === '2' || stringOfNumbers[0] === '3':
	alert ('да');
	break;

	default:
	alert ('нет');
	break;
}


// Task 5 =========================

function sum(stringOfThreeNumbers) {
	let stringArray = stringOfThreeNumbers.split('');
	let result = +stringArray[0] + +stringArray[1] + +stringArray[2];
	return result;
}

console.log(sum('524'));

// Task 6 =========================

function sumOfNumbers(stringOfSixNumbers) {
	let stringArray = stringOfSixNumbers.split('');
	let leftSide = +stringArray[0] + +stringArray[1] + +stringArray[2];
	let rightSide = +stringArray[3] + +stringArray[4] + +stringArray[5];

	if (leftSide === rightSide) {
		return 'да';
	} else {
		return 'нет';
	}
}

console.log(sumOfNumbers('145145'));

// additionally =========================

// for

function factorialOfNumber(number) {
	factorial = 1;
	for (i = 1; i <= number; i++) {
		factorial *= i;
	}
	return factorial;
}

console.log(factorialOfNumber(4));

// recursion

function factorial(n) {
	if (n >= 0) {
		let result = 1;
		while (n > 0) {
			result = result * n;
			n--;
		}
		return result;
	}

	return 'Неправильное число!';
}

console.log(factorial(5));