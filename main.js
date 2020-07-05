'use strict'; 
//use strictを宣言すると、コードがstrict（厳格）モードで実行されるようになる。

// const double = function (a){
//   return a * 2;
// }
//    ↓ 同じ
const double = a => a * 2;
console.log(double(6));
