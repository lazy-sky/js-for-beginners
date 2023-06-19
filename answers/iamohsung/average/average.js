/**
 *
 * @param {number[]} numbers - 숫자로 이루어진 배열
 * @returns {numbers} average - numbers의 평균값
 */
function solution(numbers) {
  // 코드 작성
  let answer = 0;
  answer =
    numbers.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, answer) / numbers.length;

  return answer;
}

export default solution;
