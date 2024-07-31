let b = ["this", "is", "an", "array"]; //array initializing

console.log("Original List");

console.log(b);

let a = [];

a = b.filter((x) => x.length > 3); //using filter to get the words which are greater than length 3
console.log("Filter words greater than length 3");
console.log(a);
