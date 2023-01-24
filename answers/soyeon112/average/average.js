/**
 *
 * @param {number[]} numbers - 숫자로 이루어진 배열
 * @returns {numbers} average - numbers의 평균값
 */
function solution(numbers) {
  // 코드 작성
  let average;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }
  average = sum / numbers.length;
  return average;
}

export default solution;
