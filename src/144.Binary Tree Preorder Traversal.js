function before(root, arr = []) {
  if (root) {
    arr.push(root.val);
    before(root.left, arr)
    before(root.right, arr)
  }
  return arr
}

function before02(root) {
  let cur = root;
  let stack = [];
  let cache = [];
  while (stack.length && cur) {
    while (cur) {
      cache.push(cur.val);
      stack.pop(cur);
      cur = cur.left
    }
    cur = stack.pop();
    cur = cur.right;
  }
  return cache
}