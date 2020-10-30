// 迭代
var lowestCommonAncestor = function(root, p, q) {
    while(root) {
        if(root.val < p.val && root.val < q.val) {
            root = root.right
        }else if(root.val > p.val && root.val > q.val) {
            root = root.left
        }else {
            return root
        }
    }
};
// 递归
var lowestCommonAncestor = function(root, p, q) {
    if(p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    }else if(p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    }else {
        return root
    }
};