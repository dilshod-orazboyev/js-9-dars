// Type conversion - bir turdagi ma'lumot boshqa turga o'girish

//  1. String to number
let num = '123'  // string
console.log(Number(num));
console.log(+num);

// parsInt() va parseFloat()

let num = '100.9px'
console.log(paseInt(num)); // Butun  sonlar uchun
console.log(parseFloat(num)); // Kasr sonlar uchun



let id = Symbol('id')
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number(1n)); // 1 BigInt
// console.log(Number(id)); //TypeError

// Number to String
let newNum = 123 // Number
console.log(String(newNum));
console.log(newNum,toString());
console.log(`${newNum}`); // template literals


// Boolean
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(1n)); // true
console.log(Boolean(id)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(!!id)); // true










