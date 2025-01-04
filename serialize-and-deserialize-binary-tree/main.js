class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const s1 = (root) => {
  const res = [];
  const dfs = (node) => {
    if (!node) {
      res.push("null");
      return;
    }
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return res.join(",");
};

const d1 = (s) => {
  const nodes = s.split(",");
  const dfs = () => {
    if (nodes.length === 0) return null;
    const val = nodes.shift();
    if (val === "null") {
      return null;
    }
    const node = new TreeNode(parseInt(val, 10));
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
};

const serialize = function (root) {
  if (!root) return "null";

  let output = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node) {
      output.push("null");
      continue;
    } else {
      output.push(node.val);
      // stack is LIFO, ensuring the left sub tree is processed first
      stack.push(node.right);
      stack.push(node.left);
    }
  }
  return output.join(",");
};

// const output = deserialize("1,2,null,null,3,4,null,null,5,null,null");
const deserialize = function (data) {
  if (!data) return null;

  const tokens = data.split(",");
  if (tokens[0] === "null") return null;

  const root = new TreeNode(parseInt(tokens.shift(), 10));
  const stack = [{ node: root, state: 0 }]; // Stack with node and its state

  while (tokens.length > 0) {
    const token = tokens.shift();
    const node = token === "null" ? null : new TreeNode(parseInt(token, 10));

    const cur = stack[stack.length - 1];
    if (cur.state === 0) {
      cur.node.left = node;
      cur.state++;
    } else {
      cur.node.right = node;
      stack.pop();
    }

    if (node) stack.push({ node, state: 0 });
  }

  return root;
};

const s2 = (root) => {
  const res = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    }
    if (!node) {
      res.push("null");
    } else {
      res.push(node.val);
    }
  }
  return res.join(",");
};

const d2 = (s) => {
  const nodes = s.split(",");

  const root = new TreeNode(parseInt(nodes.shift(), 10));
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    const left = nodes.shift();
    if (left !== "null") {
      node.left = new TreeNode(parseInt(left, 10));
      queue.push(node.left);
    }
    const right = nodes.shift();
    if (right !== "null") {
      node.right = new TreeNode(parseInt(right, 10));
      queue.push(node.right);
    }
  }
  return root;
};

module.exports = { serialize, deserialize, d1, d2, s1, s2 };
