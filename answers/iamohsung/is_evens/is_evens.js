/**
 *
 * @param {number[]} numbers - 숫자로 이루어진 배열
 * @returns {boolean}
 */
function solution(numbers) {
  // 코드 작성
  let answer = true;

  numbers.forEach((num) => {
    if (num % 2 !== 0) {
      answer = false;
    }
  });

  return answer;
}

export default solution;
