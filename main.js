// получаем id элемента 'table'
let my_table = document.getElementById("table");

// получаем элементы, входящие в элемент 'table'
let cells = my_table.querySelectorAll('td, input');

// loop
for (var i=0; i < cells.length; i++ ) {
    if (cells[i].getAttribute('id') != null)
    {
    document.getElementById(cells[i].getAttribute('id'))
            .addEventListener('click', printSymbol)
        }
    }
symbolList = ['(', ')', '/', '*', '-', '+', '.']
function printSymbol(e) {
    let obj = e.target
        // если знак "AC", возвращаем к нулю
        if (obj.id == 'clear') {
        result.value = 0
        }
        // если знак "=", считаем написанное в строке
        else if (obj.id == 'eq') {
            result.value = eval(result.value)
        }
        // если в строке ноль и вводим [0,9], то заменяем
        else if (result.value == 0
                && (obj.textContent >=0 && obj.textContent <= 9)) {
            console.log('Я внутри!')
            result.value = obj.textContent
         }
        else if (symbolList.includes(result.value[result.value.length-1])) {
            console.log('Содержит один из символов!')
            if (!symbolList.includes(obj.textContent)) {
                console.log('Знаков нет, только цифры!')
                result.value += obj.textContent
            }
            else {
                console.log('Не могу выводить 2 знака подряд!')
                result.value += ''
            }
        }
        // если не условия выше, добавляем цифру
        else {
            console.log('Добавляем цифру!')
            result.value += obj.textContent
        }
    };