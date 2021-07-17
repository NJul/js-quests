true + false; // 1
[, , ,].length; // 3
[1, 2, 3] + [4, 5, 6]; // "1,2,34,5,6"
0.2 + 0.1 === 0.3; // false
10, 2; // 2
!!''; // false
+!![]; // 1
!!!true; // false
true == 'true'; // false
010 - 03; // 5
'' - -''; // 0
null + 0; // 0
0 / 0; // NaN
1 / 0 > Math.pow(10, 1000); // false
true++; // Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
"" - 1; // -1
(null - 0) + "0"; // "00"
