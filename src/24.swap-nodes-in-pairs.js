// 递归
var swapPairs = function(head) {
    if(head === null || head.next === null){
        return head
    }
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};

// 迭代 
var swapPairs = function(head) {
    if (! head || ! head.next) {
        return head;
    }
    let res = head.next;
    let zeroNode = new ListNode(0);
    zeroNode.next = head;
    while (zeroNode.next != null && zeroNode.next.next != null) {
        let tmpNode = zeroNode.next;
        zeroNode.next = tmpNode.next;
        tmpNode.next = zeroNode.next.next;
        zeroNode.next.next = tmpNode;
        zeroNode = zeroNode.next.next;
    }
    return res;
};