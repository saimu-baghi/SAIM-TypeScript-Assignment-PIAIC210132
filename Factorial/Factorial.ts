// 4 - Create a Function to Calculate the Factorial of a Number
import promptSync from 'prompt-sync';

function Factorial(num: number): number {
    let fact: number = 1;
    for (let i = num; i > 0; i--) {
        fact = fact * i;
    }
    return fact;
}

const prompt = promptSync();
const num = parseInt(prompt("Enter a number to find its factorial : "));

console.log(Factorial(num));