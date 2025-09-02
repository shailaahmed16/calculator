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
                
            else {
                string += btnText;
            }
            inputbox.value = string;
        }
    });
});


