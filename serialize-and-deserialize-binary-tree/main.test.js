const { serialize, s1, s2, d1, d2, deserialize } = require("./main");

test("serialize", () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  };
  const output = serialize(root);
  expect(output).toEqual("1,2,null,null,3,4,null,null,5,null,null");

  const output2 = s1(root);
  expect(output2).toEqual("1,2,null,null,3,4,null,null,5,null,null");

  const output3 = s2(root);
  expect(output3).toEqual("1,2,3,null,null,4,5,null,null,null,null");
});

test("deserialize", () => {
  const output = deserialize("1,2,null,null,3,4,null,null,5,null,null");
  expect(output).toEqual({
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  });
  const root = d1("1,2,null,null,3,4,null,null,5,null,null");
  expect(root).toEqual({
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  });
  const r = d2("1,2,3,null,null,4,5,null,null,null,null");
console.warn(r)
  expect(r).toEqual({
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  });
});
