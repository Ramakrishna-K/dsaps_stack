let text = "hello";

let stack = [];

// Push characters into stack
for(let char of text){
    stack.push(char);
}

let reversed = "";

// Pop characters from stack
while(stack.length > 0){
    reversed += stack.pop();
}

console.log(reversed);
