type Combinable = number | string;
type ConversioDes = "as-number" | "as-text";
//사용자 정의타입
function combine(
  input1: Combinable,
  input2: Combinable,
  //유니온타입을 결합하는데 사용하는 리터럴타입
  resultType: ConversioDes
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  //   if (resultType === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
  return result;
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
//56

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
//3026

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
//MaxAnna
