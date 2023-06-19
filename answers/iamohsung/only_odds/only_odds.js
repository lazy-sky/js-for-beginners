/**
 *
 * @param {number[]} numbers - 숫자로 이루어진 배열
 * @returns {numbers} odds - 홀수로 이루어진 배열
 */
function solution(numbers) {
  // 코드 작성
  let answer;
  answer = numbers.filter((num) => num % 2 !== 0);
  return answer;
}

export default solution;
