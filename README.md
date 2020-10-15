# 数据结构
## 队列和栈
1. [两数之和](./src/01.Two_Sum.js)
2. [斐波那契](./src/509.Fibonacci_Number.js)
3. [有效括号](./src/20.Valid_Parentheses.js)
4. [简化路径](./src/71.Simplify_Path.js)

## 链表
1. [移除链表元素](./src/203.Remove_Linked_List_Elements.js)
2. [环形链表1](./src/141.Linked%20List%20Cycle.js)
3. [环形链表2](./src/142.Linked%20List%20Cycle%20II.js)
4. [反转链表](./src/206.Reverse%20Linked%20List.js)

## 二叉树
1. [反转二叉树](./src/226.Invert%20Binary%20Tree.js)
2. [相同的树](./src/100.Same%20Tree.js)
3. [二叉树的前序遍历](./src/144.Binary%20Tree%20Preorder%20Traversal.js)
4. [二叉树的最大深度](src/104.Maximum%20Depth%20of%20Binary%20Tree.js)


## 其他
1. [不均匀硬币产生等概率](src/random.js)


```js
// 交换数组
function swipe(arr) {
  let r = [];
  let cur = null;
  for(let i=0;i<=arr.length;i++) {
    if((i+1)%2===0) {
      r.push(arr[i],cur)
    }else {
      cur = arr[i]
    }
  }
  return r
}
```

