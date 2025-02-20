//var, let ,const
var a = "variable var";
let b = "let variable";
const c = "const variable";

// function xyz() {
//   console.log("variable", a);
//   console.log("variable", b);
//   console.log("variable const", c);
// }
// xyz();

function var1() {
  var aa = "fawad function scope";
  //console.log("fucnton sc", aa);
}
// if (true) {
//   var aaaa = "condition scorpe";
//   //console.log("conditon", aaaa);
// }
// var1();
// //console.log("test aaaa", aa);

{
  let aaaa = "condition scorpe";
}
//var1();
//const aaaa = "condition scorpe oustside";
//console.log("test aaaa", aaaa);
var aaaa = "condition scorpe";
var aaaa = "khan";
console.log("sdfs", aaaa);

const arr1 = ["khatak", "khan", "test"];
// arr1.forEach((val, index) => {
//   console.log("iterable", val, index);
// });

const mynewArr = arr1.filter((val) => val == "khatak");

console.log(mynewArr);
