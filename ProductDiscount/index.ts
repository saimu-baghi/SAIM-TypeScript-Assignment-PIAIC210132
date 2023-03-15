// 3 - Create a Function to Determine the Discount Amount for a Product
import promptSync from 'prompt-sync';

try {
    function discount(price: number, discountPer: number): number {
        if (discountPer >= 50) {
            throw new Error("Percentage is invalid");
        }
        else {
            return price * (discountPer / 100);
        }
    }

    const prompt = promptSync();
    const price = parseInt(prompt("Enter Product Price : "));
    const discountPer = parseInt(prompt("Enter Discount Percentage : "));

    let discountAmount: number = discount(price, discountPer);
    let finalPrice: number = price - discountAmount;

    console.log(`\nOriginal Price :`, price, `\nDiscount Percintage :`, discountPer);
    console.log(`\nDiscount Amount :`, discountAmount, `\nFinal Price :`, finalPrice);
}

catch (e: any) {
    console.log(`Error :`, e.message);
}