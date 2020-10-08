# 数据结构
## 队列和栈
1. 两数之和
2. 斐波那契
3. 有效括号
4. 简化路径

## 链表
1. 移除链表元素
2. 环形链表
3. 反转链表

## 二叉树
1. 反转二叉树
2. 相同的树
3. 二叉树的前序遍历
4. 二叉树的最大深度

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

