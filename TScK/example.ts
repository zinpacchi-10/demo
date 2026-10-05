const name: string = 'Bangladesh';
function greet(n: string): string {
  return `Hello ${n}`;
}
//
console.log(greet(name));
function divide(a: number, b: number): Number {
  if (b == 0) {
    throw new Error('zero are not allowed');
  }
  return a / b;
}
console.log(divide(6, 3));
const result = divide(32, 2);
console.log(result.toFixed(2));
const country = 'Bangladesh';
console.log(country);
//
function addNumber(a: number, b: number): number {
  const sum = a + b;
  console.log(sum);
  return sum;
}
addNumber(20, 30);
