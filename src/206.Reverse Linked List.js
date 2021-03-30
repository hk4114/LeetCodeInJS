function reverse(head) {
  let cur = head;
  let pre = null;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next
    // [pre, cur, cur.next] = [cur, cur.next, pre]
  }
  return pre
}