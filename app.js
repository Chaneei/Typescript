function re(n1, n2) {
  return n1 + n2;
}
//함수가 아무것도 반환하지 않는다면 void를 표준으로 사용
function printRe(num) {
  console.log("Result: " + num);
  //Result 17
}
console.log(printRe(re(5, 12)));
//undefined
//함수 타입은 어떤 유형의 함수를 사용하려는 것인지 구체적으로 설명할 수 있음
var combineValue;
combineValue = re;
// combineValue = printRe;
console.log(combineValue(8, 8));
function addAndHandle(n1, n2, cb) {
  var result = n1 + n2;
  cb(result);
}
addAndHandle(10, 20, function (result) {
  console.log(result);
});
