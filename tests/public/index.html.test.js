const { JSDOM } = require("jsdom");

describe("test index.html", () => {
  beforeAll(async () => {
    const jsdom = await JSDOM.fromFile(__dirname + "/../../public/index.html");
    Object.defineProperty(window, "document", {
      writable: true,
      value: jsdom.window.document,
    });
  });

  test("全てのanchorタグにIDが振られている", async () => {
    const anchors = document.getElementsByTagName("a");
    for (const anchor of anchors) {
      const id = anchor.id;
      expect(id).not.toBe("");
    }
  });
  test("全てのanchorタグに一意なIDが振られている", async () => {
    const ids = new Set();
    const anchors = document.getElementsByTagName("a");
    for (const anchor of anchors) {
      const id = anchor.id;
      expect(ids.has(id)).toBeFalsy();
      ids.add(id);
    }
  });
});
