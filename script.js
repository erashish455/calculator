var operator1 = '0';
var operent = '+';
var operator2 = ''
var results;
var memory = '';

function operation(a) {
    operator2 += a
    document.getElementById("result").innerHTML = operator2

}

function operator(b) {
    console.log(operator1, operator2, operent, b)
    if (b == "C") {
        operator1 = '0';
        operent = '+';
        operator2 = '';
        results = ''
        document.getElementById('result').innerHTML = "0"
    } else {
        switch (operent) {
            case '+':
                results = Number(Number(operator1) + Number(operator2));
                document.getElementById('result').innerHTML = results
                console.log("plus", results);

                break;

            case '-':
                results = parseInt(parseInt(operator1) - parseInt(operator2));
                document.getElementById('result').innerHTML = results
                console.log("minus", results);
                break;

            case '*':
                results = parseFloat(parseFloat(operator1) * parseFloat(operator2));
                document.getElementById('result').innerHTML = results
                console.log("mul", results);
                break;

            case '/':
                results = parseFloat(parseFloat(operator1) / parseFloat(operator2));
                document.getElementById('result').innerHTML = results
                console.log("devide", results);
                break;
            case '=':
                results = operator1;
                document.getElementById('result').innerHTML = results
                break;
            case '%':
                results = parseInt((parseInt(operator1) * parseInt(operator2)) / 100);
                document.getElementById('result').innerHTML = results
                console.log("percent", results);
                break;
                // case 'M':
                //     memory = results
                //     document.getElementById('result').innerHTML = "result saved in the memory"
                //     break

            default:
                break;
        }
        operator2 = '0';
        operator1 = results;
        operent = b

    }




}




// time for calculator

let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours()
    if (time > 12) {
        time = time - 12
    } else {

    }

    newtime = time + ':' + a.getMinutes() + ':' + a.getSeconds();
    console.log(newtime)
    document.getElementById('time').innerHTML = newtime + "<br> " + date;
}, 1000);