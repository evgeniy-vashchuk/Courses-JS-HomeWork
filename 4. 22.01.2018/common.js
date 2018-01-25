// Home Work #4 (22.01.2018)

// Task 1 =========================

function factorialOfNumber(number) {
	factorial = 1;
	for (i = 1; i <= number; i++) {
		factorial *= i;
	}
	return factorial;
}

console.log(factorialOfNumber(4));