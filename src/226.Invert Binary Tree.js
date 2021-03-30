function reverseTree(root) {
  if (root !== null) {
    return root
  }
  [root.left, root.right] = [reverseTree(root.right), reverseTree(root.left)]
  return root
}