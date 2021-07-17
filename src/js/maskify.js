// maskify("455636407935616") == "############5616"
// maskify(    "64607935616") ==      "#######5616"
// maskify(              "1") ==                "1"
// maskify(               "") ==                 ""
// // "What was the name of your first pet?"
// maskify("Skippy")          == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

function maskify(cc) {
  // If length is greater than 4, then we have things to mask
  if (cc.length > 4) {
    // reverse string
    let reversed = reverse(cc);
    let newString = '';
    for (let i = 0; i < reversed.length; i++) {
      // if i < 4, we want to reveal these numbers in our output
      if (i < 4) {
        newString += reversed[i];
      } else {
        // otherwise, just hide it
        newString += '#';
      }
    }
    // return the reversal of the string to revert it back to original format
    return reverse(newString);
  } else {
    return cc;
  }
}

function reverse(str) {
  return str.split('').reverse().join('');
}

/** */
// const maskify = (cc) => {
//   let ccArray = Array.from(cc); // Array 1
//   let length = cc.length;
//   let lastFour = cc.slice(-4); // Array 2
//   let newArray = []; // Array 3

//   if (length <= 4) {
//     return cc;
//   } else if (length > 4) {
//     let index = length - 4;
//     ccArray.splice(index, 4);
//     // Loop 1
//     ccArray.forEach((n) => {
//       newArray.push('#');
//       return newArray;
//     });
//     // Loop 2
//     return newArray.concat(lastFour).join(''); // Array 4
//   }
// };

// function maskify(cc) {
//     return "#".repeat(Math.max(0, cc.length-4)) + cc.slice(-4);
// }
// function maskify(cc) {
//     return Array.from(cc, (char, index) =>
//         index < cc.length - 4 ? "#" : char
//     ).join('')
// }
// function maskify(cc) {
//     return cc.replace(/.(?=.{4})/g, "#");
// }

// return masked string
function maskify(cc) {
  return cc.replace(/.(?=.{4,}$)/g, '#');
}

/*
Метод replace () возвращает новую строку с некоторыми или всеми совпадениями шаблона, замененными на замену. Шаблон может быть строкой или регулярным выражением, а замена может быть строкой или функцией, вызываемой для каждого совпадения. Если шаблон является строкой, будет заменено только первое вхождение.
*/

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
