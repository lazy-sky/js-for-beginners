import solution from "./reverse";

test("숫자 배열", () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

test("문자열 배열", () => {
  expect(solution(["a", "b", "c"])).toEqual(["c", "b", "a"]);
});
