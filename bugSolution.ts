function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error('Error: Both arguments must be numbers.');
    return 0; // Or throw an error
  }
  return a + b;
}

let result1 = add(5, 10); 
console.log(result1); // Output: 15

let result2 = add(5, '10'); // No more error
console.log(result2); // Output: 0 (or an error message) 