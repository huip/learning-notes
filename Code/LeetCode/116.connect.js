/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    let q = [root]
    while (q.length) {
        let tempQ = []
        for (let i = 0; i < q.length; i++) {
            q[i].next = q[i + 1]
                ? q[i + 1]
                : null
        }
        let next = null
        while (q.length) {
            current = q.pop()
            if (current.left) {
                tempQ.push(current.left)
            }
            if (current.right) {
                tempQ.push(current.right)
            }
            current.next = next
            next = current
        }
        q = tempQ
    }
};

connect({
    "$id": "1",
    "left": {
        "$id": "2",
        "left": {
            "$id": "3",
            "left": null,
            "next": null,
            "right": null,
            "val": 4
        },
        "next": null,
        "right": {
            "$id": "4",
            "left": null,
            "next": null,
            "right": null,
            "val": 5
        },
        "val": 2
    },
    "next": null,
    "right": {
        "$id": "5",
        "left": {
            "$id": "6",
            "left": null,
            "next": null,
            "right": null,
            "val": 6
        },
        "next": null,
        "right": {
            "$id": "7",
            "left": null,
            "next": null,
            "right": null,
            "val": 7
        },
        "val": 3
    },
    "val": 1
})