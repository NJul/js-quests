import Header from '../components/Header';

let title = 'human Readable Seconds';

console.log(title);

Header(title);

/**
 Human Readable Time

 Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

// The number of seconds in each of our time units
// const secondsIn = {
//   minute: 60,
//   hours: 60 * 60,
//   days: 60 * 60 * 24,
//   years: 60 * 60 * 24 * 365,
// };

function humanReadable(seconds) {
  const HH = seconds / 60 / 60;
  const MM = (seconds / 60) % 60;
  const SS = seconds % 60;

  const formatHH = Math.floor(HH).toString().padStart(2, '0');
  const formatMM = Math.floor(MM).toString().padStart(2, '0');
  const formatSS = SS.toString().padStart(2, '0');

  console.log(`${formatHH}:${formatMM}:${formatSS}`);

  return `${formatHH}:${formatMM}:${formatSS}`;
}

humanReadable(5);
humanReadable(216000);
humanReadable(3690);

/**
 Конвертирование часов
Допустим, у вас была метка времени в секундах, которую вы хотели отобразить в HH:MM:SS формате.
60 секунд в минуту и ​​60 минут в час. Мы делим свой timestamp дважды на 60. В результате мы получаем 2.6283.

*/

// var timestamp = 9462;
// // 2.628333333
// var hours = timestamp / 60 / 60;

// // Мы можем использовать Math.floor() для округления до ближайшего целого числа чтобы получить количество часов в int.

// // 2
// var hours = Math.floor(timestamp / 60 / 60);

// // 157
// var minutes = Math.floor(timestamp / 60);
// // 02:37:42

// // 2:37:42
// var formatted = hours + ':' + minutes + ':' + seconds;

// var formatted = [
//   hours.toString().padStart(2, '0'),
//   minutes.toString().padStart(2, '0'),
//   seconds.toString().padStart(2, '0'),
// ].join(':');
