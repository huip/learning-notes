/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head
    let fast = head
    let hasCycle = false
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            hasCycle = true
            break
        }
    }
    if (hasCycle) {
        fast = head
        while (slow != fast) {
            slow = slow.next
            fast = fast.next
        }
        return fast
    }
    return null
};