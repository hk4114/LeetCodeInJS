class Node {
    constructor(el) {
        this.el = el;
        this.next = null
    }
}

class LinkNodeList{
    constructor(){
        this.length = 0;
        this.head = null
    }

    append(el) {
        const node = new Node(el);
        if(this.head) {
            let cur = this.head;
            while(cur.next){
                cur = cur.next;
            }
            cur.next = node
        }else {
            this.head = node
        }
        this.length += 1;
        return this.length
    }

    print() {
        let cur = this.head;
        let cache = [];
        while(cur) {
            cache.push(cur.el)
            cur = cur.next;
        }
        return cache.join("->")
    }

    find(index) {
        let i = 0;
        let cur = this.head;
        while(i<index){
            cur = cur.next;
            i++
        }
        return cur
    }

    removeAt(index) {
        let cur = this.head;
        if(index === 0){
            this.head = cur.next;
        }else {
            let pre;
            let i = 0;
            while(i<index) {
                pre=cur;
                cur=cur.next;
                i++
            }
            pre.next = cur.next;
            cur.next = null;
        }
        this.length -= 1;
        return cur
    }
}

let linkNode = new LinkNodeList();
linkNode.append("hello");
linkNode.append("world");
linkNode.append("fine");
linkNode.append("thank");
linkNode.append("you");
console.log(linkNode.print())
linkNode.removeAt(2)
console.log(linkNode.print())