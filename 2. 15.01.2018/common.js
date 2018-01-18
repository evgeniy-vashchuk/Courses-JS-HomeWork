// Home Work #2 (15.01.2018)

// Task 1 =========================

let selectedNumber = prompt('Введите число:', ''),
	numbers = [4, 3, 25, 103, 1, 99],
	quantityOfNumbers = numbers.length;

for (let i = 0; i < quantityOfNumbers; i++) {
	let currentNumber = numbers[i];

	if (currentNumber === +selectedNumber) {
		alert('Ваше число ЕСТЬ в массиве!');
		break;
	} else {
		if (i === (quantityOfNumbers - 1) && selectedNumber !== null) {
			alert('Вашего числа НЕТ в массиве!');
		}
	}
}

// Task 2 =========================

let numbersInMassive = [1, 6, 3, 2, 5, 4];

for (let i = 0; i < numbersInMassive.length; i++) {

	for (let i = 0; i < numbersInMassive.length; i++) {

		if (numbersInMassive[i] > numbersInMassive[i+1]) {
			let currentNumber = numbersInMassive[i];
			let nextNumber = numbersInMassive[i+1];

			numbersInMassive[i] = nextNumber;
			numbersInMassive[i+1] = currentNumber;
		}

	}

	console.log(numbersInMassive);

}

alert(numbersInMassive);

// Task 3 =========================

let massiveWithString = [1, 2, 3, "строка", 5, 6];

for (let i = 0; i < massiveWithString.length; i++) {
	if (typeof (massiveWithString[i]) === "string") {
		alert('Найдена строка!');
		break;
	} else {
		if (i === (massiveWithString.length - 1)) {
			alert('Строка не найдена!');
		}
	}
}