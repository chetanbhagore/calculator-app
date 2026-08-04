const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {

    try {
        display.value = eval(display.value);
    }

    catch (error) {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function (event) {

    const key = event.key;

    if ("0123456789+-*/().".includes(key)) {
        appendValue(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    if (key === "Escape") {
        clearDisplay();
    }
});