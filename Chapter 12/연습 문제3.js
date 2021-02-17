function isParenthesisValid(validationString) {
    let stack = new Stack();

    for (let pos = 0; pos < validationString.length; pos++) {
        var currentChar = validationString.charAt(pos);

        if (currentChar == "(") stack.push(currentChar);
        else if (currentChar == ")") {
            if (stack.isEmpty()) return false;

            stack.pop();
        }
    }

    return stack.isEmpty();
}

isParenthesisValid("((()"); // false
isParenthesisValid("(((("); // false
isParenthesisValid("()()"); // true