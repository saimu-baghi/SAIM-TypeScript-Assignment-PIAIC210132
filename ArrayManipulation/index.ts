// 2 - Create an Array Manipulation Program

let fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(`Array befor any manipulation\n`, fruits);

// - Append a string to the end of the array
fruits.push("litchi")
console.log(`Array after appending AND before prepending a string\n`, fruits);

// - Prepend a string to the beginning of the array
fruits.unshift("pomagranate")
console.log(`Array after prepending AND befor replacing a string with another\n`, fruits);

// - Remove a string from a specific index in the array and replace it with another string
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "cherry") {
        fruits[i] = "raspberry";
    }
}
console.log(`Array after replacing a string with another\n`, fruits);