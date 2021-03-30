/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.length = 0
  this.input = []
  this.output = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.length += 1
  this.input.push(x)
};

MyStack.prototype.checkOut = function () {
  while (this.input.length) {
    const n = this.input.shift();
    this.output.unshift(n)
  }
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  this.checkOut()
  this.length -= 1
  return this.output.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  this.checkOut()
  return this.output[0]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */