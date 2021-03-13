function hasCycle(head) {
    let fast = head;
    let slow = head;
    let start = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            while (slow !== start) {
                slow = slow.next;
                start = start.next
            }
            return start
        }
    }
    return null
}