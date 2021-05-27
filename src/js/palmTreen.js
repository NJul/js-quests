import Header from '../components/Header';

let title = 'palmTree(n)';

console.log(title);

Header(title);

/* Реализуйте функцию palmTree(n), которая будет принимать целое пооложительное n и возвращать строку, состоящую из символов "p". Например, вызов palmTree(3) приведет к тому, что функция вернет "ppp". При нечисловом аргументе функция должна вернуть false, а при вызове без аргумента - один символ "p". */

// n по умолчанию = 1
// у строк есть метод .repeat

const palmTree = (n = 1) =>
  typeof n == 'number' && n > 0 ? 'p'.repeat(n) : false;

console.log(palmTree(5)); // 'ppppp'
console.log(palmTree()); // 'p'
console.log(palmTree('str')); // false
