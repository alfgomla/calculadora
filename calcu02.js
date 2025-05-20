let display = document.querySelector('.pantalla input');
const buttons = document.querySelectorAll('button');
let primerValor = 0;
let segundoValor = 0;
let operador = '';  
let resultado = 0;
let operadorIgual = false;
let operadorOperador = false;
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.classList[0]) {
            case 'numero':
                if (button.textContent != 0 || display.value != 0) {
                    if (operadorIgual) {
                        display.value = '';
                        operadorIgual = false;
                    }
                    display.value += button.textContent;
                }
            break;
            case 'operador':
                operador = button.textContent;
                console.log(operador);
                if (display.value !== '' || operadorIgual) {
                    if(operadorOperador && !operadorIgual){ 
                        segundoValor = parseFloat(display.value);
                        console.log(operador);
                        switch (operador) {
                            case '+':
                                resultado = primerValor + segundoValor;
                                break;
                            case '-':
                                resultado = primerValor - segundoValor;
                                break;
                            case '*':
                                resultado = primerValor * segundoValor;
                                break;
                            case '/':
                                resultado = primerValor / segundoValor;
                                break;
                            default:
                                alert('no hay operador');
                        }
                        display.value = resultado;
                        operadorIgual = true;
                        primerValor = resultado;
                        segundoValor = 0;
                        console.log("entro al operadorOperador");
                        
                    }else{
                        primerValor = parseFloat(display.value);
                        operador = button.textContent;
                        display.value = '';
                        operadorOperador = true;
                        operadorIgual = false;
                        console.log("no entro al operadorOperador");
                    }
                    
                }else {
                    alert('Por favor, ingrese un número antes de seleccionar un operador.');
                }
            break;

            case 'igual':
                if (display.value !== '') {
                    segundoValor = parseFloat(display.value);

                    switch (operador) {
                        case '+':
                            resultado = primerValor + segundoValor;
                            break;
                        case '-':
                            resultado = primerValor - segundoValor;
                            break;
                        case '*':
                            resultado = primerValor * segundoValor;
                            break;
                        case '/':
                            resultado = primerValor / segundoValor;
                            break;
                        default:
                            alert('Operador no válido');
                    }
                    display.value = resultado;
                    operadorIgual = true;
                    primerValor = resultado;
                    segundoValor = 0;
                    operador = '=';
                    operadorOperador = true;
                }else {
                    alert('Por favor, ingrese un número antes de seleccionar un operador.');
                }
            break;
            
            case 'borrar':
                display.value = '';
                primerValor = 0;
                segundoValor = 0;
                operador = '';
                operadorIgual = false;
                operadorOperador = false;
            break;
        }

    });
});