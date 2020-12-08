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
5. [二叉搜索树的最近公共祖先](src/235.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Search%20Tree.js)
6. [二叉树的最近公共祖先](src/236.Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree.js)

## 二分法
1. [pow](./src/50.pow.js)
2. [x的平方根](./src/69.sqrt(x).js)

## 回溯
1. [全排列](./src/46.Permutations.js)
2. [单词搜索](./src/79.Word%20Search.js)

## 其他
1. [不均匀硬币产生等概率](src/random.js)


```js
// 交换数组
// function swipe(arr) {
//   let r = [];
//   let cur = null;
//   for(let i=0;i<=arr.length;i++) {
//     if((i+1)%2===0) {
//       r.push(arr[i],cur)
//     }else {
//       cur = arr[i]
//     }
//   }
//   return r
// }
function swipe(arr) {
  for(let i=0;i<=arr.length;i++) {
    if((i+1)%2===0) {
      [arr[i-1],arr[i]] = [arr[i], arr[i-1]]
    }
  }
  return arr
}

// 统计页面标签，并取最多的三个标签
function sumTag() {
   const nodeList = document.getElementsByTagName("*");
   const nodes = [...nodeList].map(node => node.nodeName);
   return nodes.reduce((pre,next)=>{
      if(pre[next]) {
         pre[next] += 1
      }else {
         pre[next] = 1
      }
      return pre
   },{})
}

function getTop() {
   return Object.entries(sumTag()).sort((a,b)=>b[1]-a[1]).slice(0,3)
}
```

给定一个数组，类似[1,2,3,4,5]，数组长度不定，找出最接近平均数的数字。
```js
var arr = [1,2,3,4,5,6,7]

Array.prototype.average = function() {
    return this.reduce((prev,curr)=>{
        return prev + curr
    })/this.length
}

// 获取数组里与平均值相似的数
function getClosedNumber (arr) {
    let proxy = {}, abs;
    const l = arr.length, average = arr.average;
    for(let i=0;i<l;i++>){
        let innerAbs = Math.abs(average-arr[i]);
        if(typeof abs === 'undefined' || abs >= innerAbs) {
            abs = innerAbs
            if ( proxy[abs] ) {
                proxy[abs].push(arr[i])
            }else {
                proxy[abs] = [arr[i]]
            }
        }
    }
    return proxy[abs]
}
```