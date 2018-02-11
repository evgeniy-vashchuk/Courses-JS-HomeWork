// Home Work #9 (09.02.2018)

function Car(color, model, year) {
	this.color = color;
	this.model = model;
	this.year = year;

	this.carInfo = carInfo;
}

function carInfo() {
	var result = "Color: " + this.color + ", Model: " + this.model + ", Year: " + this.year;
	console.log(result);
}

var ferrari = new Car("Red", "F40", 1987);
var lamborghini = new Car("Yellow", "Diablo", 1990);
var bugatti = new Car("Black", "Veyron", 2005);

ferrari.carInfo();