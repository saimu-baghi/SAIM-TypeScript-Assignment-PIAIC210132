"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 3 - Create a Function to Determine the Discount Amount for a Product
const prompt_sync_1 = __importDefault(require("prompt-sync"));
try {
    function discount(price, discountPer) {
        if (discountPer >= 50) {
            throw new Error("Percentage is invalid");
        }
        else {
            return price * (discountPer / 100);
        }
    }
    const prompt = (0, prompt_sync_1.default)();
    const price = parseInt(prompt("Enter Product Price : "));
    const discountPer = parseInt(prompt("Enter Discount Percentage : "));
    let discountAmount = discount(price, discountPer);
    let finalPrice = price - discountAmount;
    console.log(`\nOriginal Price :`, price, `\nDiscount Percintage :`, discountPer);
    console.log(`\nDiscount Amount :`, discountAmount, `\nFinal Price :`, finalPrice);
}
catch (e) {
    console.log(`Error :`, e.message);
}
