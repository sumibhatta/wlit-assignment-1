// Function to convert Fahrenheit to celcius and vice versa
let flag = Number(prompt("Enter \n 0 for Fahrenheit to Celcius \n 1 for Celcius to Fahrenheit"));
const temp = Number(prompt("Enter desired temperatuure"));

function viceVersaFandC(temp, flag) {
    if (flag === 0) {
        return `${temp}F =  ${(5/9)*(temp - 32)}C`;
    } else if (flag === 1) {
        return `${temp}C =  ${(temp*1.8)+32}F`;
    }
};

alert(viceVersaFandC(temp, flag));