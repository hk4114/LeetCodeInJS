import { mergeTwoLists } from './21.merge-two-sorted-lists'

// 顺序合并
var mergeKLists = function (lists) {
  let n = lists.length
  if (n == 0) return null
  let res = lists[0]
  for (let i = 1; i < n; i++) {
    if (lists[i]) {
      res = mergeTwoLists(res, lists[i])
    }
  }
  return res
};


// 分治合并
var mergeKLists = function(lists) {
  let n = lists.length;
  if(n == 0) return null;
  let merge = (left,right) => {
      if(left == right) return lists[left];
      let mid = (left + right) >> 1;
      let l1 = merge(left,mid);
      let l2 = merge(mid+1,right);
      return mergeTwoLists(l1,l2);
  }
  return merge(0,n-1);
};
