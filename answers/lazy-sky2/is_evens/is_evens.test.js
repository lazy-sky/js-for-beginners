import solution from "./is_evens";

test("배열의 모든 원소가 짝수라면 true를 return합니다.", () => {
  expect(solution([2, 4, 6, 8])).toEqual(true);
});

test("홀수가 하나라도 있으면 false를 return합니다.", () => {
  expect(solution([1, 2, 3, 4])).toEqual(false);
});
