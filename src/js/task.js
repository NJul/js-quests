const color1 = 'red';
const color2 = 'orange';
const color3 = 'yellow';
const color4 = 'green';
const color5 = 'blue';
const color6 = 'indigo';
const color7 = 'violet';

const rainbowColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

rainbowColors[5] = 'dark blue';
rainbowColors[8] = 'indigo';
rainbowColors[rainbowColors.length] = 'indigo2';

console.log('The sky is ' + rainbowColors[4]);
console.log(rainbowColors);

const stringNumbers = [];
stringNumbers[0] = 'one';
stringNumbers[1] = 'two';
stringNumbers[2] = 'three';

const stringNumbers = new Array('one', 'two', 'three');
console.log(stringNumbers);

const numbers = [34, 5, 32, 67, 1239, 1, 0, 87, 55];
console.log(numbers);

let result;

result = numbers.length;
// является ли значение, содержащееся в переменной, массивом?
result = Array.isArray(numbers); // true
result = numbers.push(7);
// .pop() возвращает элемент, который был удален
result = numbers.pop(); // 7
result = numbers.unshift(3); // возвращает длину нового массива
result = numbers.shift(); // возвращает значение первого удаенного элемента, 3

result = numbers.push('Я', 'изучаю', 'JavaScript');

console.log(numbers);
console.log(result);
