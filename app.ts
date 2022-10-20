//Unknown Type
let userInput: unknown;
//any보다 제한적임
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

//Never Type
//아무것도 반환하지 않는다는 것을 확실히 하기 위해 never를 명시적으로 설정
function generateError(message: string, code: number): never {
  throw { messgage: message, errorCode: code };
}

generateError("An error occured!", 500);
