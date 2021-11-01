// 迭代
export const mergeTwoLists = function (l1, l2) {
  const prehead = new ListNode(-1);
  let prev = prehead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;
  return prehead.next;
};

// 递归
export const mergeTwoListsByRecursion = function (l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

// 排序数组
var mergeKLists = function(lists) {
  if(!lists || lists.length == 0) return null;
  let arr = [];
  let res = new ListNode(0);
  lists.forEach(list => {
      let cur = list;
      while(cur){
          arr.push(cur.val);
          cur = cur.next;
      }
  })
  let cur = res;
  arr.sort((a,b) => a-b).forEach(val => {
      let node = new ListNode(val);
      cur.next = node;
      cur = cur.next;
  })
  return res.next;
};