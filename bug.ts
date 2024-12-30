function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, '10'); // Type Error here
console.log(result); // This line will not be reached