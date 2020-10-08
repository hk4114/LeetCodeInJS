function removeEls(head,val) {
    let cur = head;
    let pre = null;
    while(cur) {
        if(head === cur && cur.val === val) {
            head = head.next;
            cur = head
        }else if(cur.val === val) {
            pre.next = cur.next;
            cur = pre.next;
        }else {
            pre = cur;
            cur = cur.next;
        }
    }
    return head
}