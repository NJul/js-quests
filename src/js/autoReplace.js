import Header from '../components/Header';

let title = 'autoReplace';

console.log(title);

Header(title);

/**
 * Реализуйте функцию autoReplace(needles, change, haystack) , кторая будет принимать на вход массив слов, которые нужно поменять на строку change внутри строки haystack. Например, вызов функции
 *
 * autoReplace(['салат', 'помидоры'], 'еда', 'свежие помидоры пошли в салат')
 *
 * должна вернуть строку 'свежие еда пошли в еда'.
 *
 * Примечание: если хотите, тут можно использовать регулярные выражения, но это не обязательно, регистр не должен учитываться. При отсутствии параметров должен вернуться false
 */

function autoReplace(needles, change, haystack) {
  // если какой-то из аргументов отсутствует, то сразу прекратим работу функции
  if (!needles || !change || !haystack) return false;
  // .join массив по вертикальной палке, в регулярных выражениях | обозначает ИЛИ
  // потом произвожу замену, так, что она глобально заменяет все вхождения
  return haystack.replace(new RegExp(needles.join('|'), 'gi'), change);
}

let arr = ['салат', 'помидоры', 'пицца'],
  str = 'свежие помидоры пошли в салат, пицца была вкусной';
console.log(autoReplace(arr, 'еда', str)); // 'свежие еда пошли в еда, еда была вкусной'

let joinOR = arr.join('|');
console.log(joinOR);
