/**
 *
 * @param {number[]} numbers - 숫자로 이루어진 배열
 * @returns {boolean}
 */
function solution(numbers) {
  // 코드 작성
  let answer;
  for (let i = 0; i < numbers.length; i++) {
    if (Number(numbers[i]) % 2 === 0) {
      answer = true;
    } else {
      answer = false;
      break;
    }
  }
  return answer;
}

export default solution;
