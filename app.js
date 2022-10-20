//Unknown Type
var userInput;
//any보다 제한적임
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
//Never Type
function generateError(message, code) {
    throw { messgage: message, errorCode: code };
}
var result = generateError("An error occured!", 500);
console.log(result);
