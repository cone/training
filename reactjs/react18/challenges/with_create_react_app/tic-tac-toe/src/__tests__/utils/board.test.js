import { getRowAndCol } from "../../utils/board";

describe("board", () => {
  describe("getRowAndCol", () => {
    it("should return the correct values for row anc column", () => {
      const result = getRowAndCol("1-2");

      expect(result[0]).toEqual(1);
      expect(result[1]).toEqual(2);
    })
  });
});
