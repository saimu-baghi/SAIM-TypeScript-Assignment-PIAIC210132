"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 4 - Create a Function to Calculate the Factorial of a Number
const prompt_sync_1 = __importDefault(require("prompt-sync"));
function Factorial(num) {
    let fact = 1;
    for (let i = num; i > 0; i--) {
        fact = fact * i;
    }
    return fact;
}
const prompt = (0, prompt_sync_1.default)();
const num = parseInt(prompt("Enter a number to find its factorial : "));
console.log(Factorial(num));
