import solution from "./only_odds";

describe("filterOdd", () => {
  test("test1", () => {
    expect(solution([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });
  test("test2", () => {
    expect(solution([3, 5, 7])).toEqual([3, 5, 7]);
  });
  test("test3", () => {
    expect(solution([2, 4, 6, 8])).toEqual([]);
  });
});
