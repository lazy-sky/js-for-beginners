/**
 *
 * @param {number[]} numbers - 숫자로 이루어진 배열
 * @returns {numbers} odds - 홀수로 이루어진 배열
 */
function solution(numbers) {
  // 코드 작성
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    if (Number(numbers[i]) % 2 === 1) {
      answer.push(numbers[i]);
    }
  }

  return answer;
}

export default solution;
