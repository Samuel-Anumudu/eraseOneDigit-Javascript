function strToInt(str) {
  return parseInt(str.split("").join(""));
}

function removeFirst(str) {
  const strArr = str.split("");
  strArr.shift();
  if (parseInt(strArr[0]) === 0) return false;
}

function removeLast(str) {
  const strArr = str.split("");
  strArr.pop();
  return parseInt(strArr.join(""));
}

function eraseOneDigit(firstNum, secondNum, thirdNum) {
  if (!firstNum.length || firstNum.length === 1) return false;

  if (parseInt(firstNum.split("")[0]) === 0) {
    return false;
  } else {
    const arr = [];
    arr.push(strToInt(firstNum), strToInt(secondNum), strToInt(thirdNum));

    if (arr[0] + arr[1] === arr[2]) return true;

    if (removeLast(firstNum) + arr[1] === arr[2]) {
      return true;
    } else if (removeLast(firstNum) + arr[1] !== arr[2]) {
      return removeFirst(firstNum);
    }
  }
}
console.log(eraseOneDigit("10534", "67", "1120"));
