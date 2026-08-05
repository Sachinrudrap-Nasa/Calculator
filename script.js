let number1 = -1;
let number2 = -1;
let operator = "";
let answer = 0;
let counter = 0;
let currentstring = "";
let displaytext = document.getElementById("displaytext");
function getButtonVal(value) {
	let currentinput = value;
	if ((currentinput === "bs") & (currentstring.length > 0)) {
		currentstring = currentstring.slice(0, -1);
	} else if (currentinput === "C") {
		number1 = -1;
		number2 = -1;
		operator = "";
		answer = 0;
		counter = 0;
		currentstring = "";
		currentinput = "";
		document.getElementById("numbera").textContent = ""
		document.getElementById("operator").textContent = ""
		document.getElementById("numberb").textContent = ""
	} else if (currentinput === "(") {
		currentinput = Symbol("(")
	} else if (currentinput === ")") {
		currentinput = Symbol(")")
	}
	else if (counter === 3) {
		if (
			(currentinput !== "+") &
			(currentinput !== "-") &
			(currentinput !== "*") &
			(currentinput !== "/") &
			(currentinput !== "=")
		) {
			concatenate(currentinput);
		}
	} else if (counter === 2) {
		counter = counter + 1; //3
		if (
			(currentinput !== "+") &
			(currentinput !== "-") &
			(currentinput !== "*") &
			(currentinput !== "/") &
			(currentinput !== "=")
		) {
			concatenate(currentinput);
		}
	} else if (counter === 1) {
		if (
			(currentinput !== "+") &
			(currentinput !== "-") &
			(currentinput !== "*") &
			(currentinput !== "/")
		) {
			concatenate(currentinput);
		}
	}
	if (currentinput !== isNaN) {
		if (counter === 0) {
			counter = counter + 1; // counter was 0 we made it a 1
			if (
				currentinput !== "+" ||
				currentinput !== "-" ||
				currentinput !== "*" ||
				currentinput !== "/"
			) {
				concatenate(currentinput);
			}
		} else if (
			currentinput === "+" ||
			currentinput === "-" ||
			currentinput === "*" ||
			currentinput === "/"
		) {
			counter = counter + 1; // counter incremented from 1 to 2
			number1 = Number(currentstring);
			operator = currentinput;
			currentstring = "";
		} else if (
			currentinput === "="
		) //currentinput is = so we will get the answer
		{
			number2 = Number(currentstring);
			answer = Number(operation().toFixed(6));
			document.getElementById("displaytext").innerText = answer;
		}
		if (counter === 1){
			document.getElementById("numbera").innerText =
				currentstring;
		}
		if (counter === 2) {
			document.getElementById("operator").innerText = operator;
		}
		if (counter === 3) {
			document.getElementById("numberb").innerText =
				currentstring;
		}
	}
}
function concatenate(currentinput) {
	currentstring = currentstring + currentinput;
}
function operation() {
	if ((number1 != -1) & (number2 != -1) & (operator != " ")) {
		if (operator == "+") {
			answer = Number(add(number1, number2));
		} else if (operator == "-") {
			answer = subtract(number1, number2);
		} else if (operator == "*") {
			answer = multiply(number1, number2);
		} else if (operator == "/") {
			answer = divide(number1, number2);
		} else {
			return;
		}
		return answer;
	}
}
function add(number1, number2) {
	return Number(number1 + number2);
}
function subtract(number1, number2) {
	return Number(number1 - number2);
}
function multiply(number1, number2) {
	return Number(number1 * number2);
}
function divide(number1, number2) {
	return Number(number1 / number2);
}
