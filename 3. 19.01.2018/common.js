// Home Work #3 (19.01.2018)

// Task 1 =========================

// with while

var i = 1;
while (i <= 5) {
	console.log(i);
	i++;
}

// do while

var i = 0;
do {
	i++;
	console.log(i);
} while (i < 5);

// for

for (i=1; i <= 5; i++) {
	console.log(i);
}

// Task 2 =========================

for (i=5; i > 0; i--) {
	console.log(i);
}


// Task 3 =========================

function multiplication(i) {
	let result = 3 * i;
	console.log('3 * ' + i + ' = ' + result)
}

for (i = 1; i < 11; i++) {
	multiplication(i)
}

// Task 4 =========================

let number = prompt('Введите ЦЕЛОЕ, ПОЛОЖИТЕЛЬНОЕ число', ''),
	sum = 0;

for (i = 1; i <= number; i++) {
	sum += i;
}

console.log(sum);