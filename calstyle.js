let inputbox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        let btnText = b.target.innerText;

        if (btnText === '=') {
            try {
                string = String(eval(string));
            } catch {
                string = 'Error';
            }
            inputbox.value = string;
        }
        else if (btnText === 'AC') {
            string = '';
            inputbox.value = '0';
        }
        else if (btnText === 'DEL') {
            string = string.substring(0, string.length - 1);
            inputbox.value = string || '0';
        }
        else if (btnText === '±') {
            if (string) {
                string = String(-Number(string));
                inputbox.value = string;
            }
        }
        else {
            if (inputbox.value === '0' && btnText !== '.') {
                string = btnText; // replace starting zero
            }
                else if (btnText === "π") {
                string += Math.PI;
                display.value = string;
            }
            else if (btnText === "e") {
                string += Math.E;
                display.value = string;
            }
            else if (btnText === "sin") {
                string = Math.sin(eval(string) * Math.PI / 180);
                display.value = string;
            }
            else if (btnText === "cos") {
                string = Math.cos(eval(string) * Math.PI / 180);
                display.value = string;
            }
            else if (btnText === "tan") {
                string = Math.tan(eval(string) * Math.PI / 180);
                display.value = string;
            }
            else if (btnText === "log") {
                string = Math.log10(eval(string));
                display.value = string;
            }
            else if (btnText === "ln") {
                string = Math.log(eval(string));
                display.value = string;
            }
            else if (btnText === "√") {
                string = Math.sqrt(eval(string));
                display.value = string;
            }
            else if (btnText === "x²") {
                string = Math.pow(eval(string), 2);
                display.value = string;
            }
            else if (btnText === "x³") {
                string = Math.pow(eval(string), 3);
                display.value = string;
            }
            else {
                string += btnText;
            }
            inputbox.value = string;
        }
    });
});

