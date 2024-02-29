const Stack = require("../lib/stack");

const match = (expression) => {
  const stack = new Stack();

  for (let index = 0, limit = expression.length; index < limit; index++) {
    if (expression[index] === "(") {
      stack.push("(");
    } else {
      if (expression[index] === ")") {
        if (stack.top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !stack.top;
};

module.exports = match;
/**
 * * Initialize a new empty stack.

Start a loop to iterate through each character in the expression.
If the current character is (:
Push it onto the stack.
Else:
If the current character is ):
If the stack isn't empty:
Pop one item off the stack.
Else:
Return false.
If the stack is empty:
Return true.
Else:
Return false.
 */