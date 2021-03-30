function isCycle(head) {
  while (head) {
    if (head.isChecked) {
      return true
    } else {
      head.isChecked = true
    }
    head = head.next
  }
  return false
}