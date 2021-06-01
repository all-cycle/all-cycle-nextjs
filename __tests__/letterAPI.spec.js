import { shallow } from "enzyme";

import { getAllLetterList } from "@/utils/letterAPI";

describe("letterAPI", () => {
  it("return all letter list", () => {
    getAllLetterList(["slug"]);
  });
});
