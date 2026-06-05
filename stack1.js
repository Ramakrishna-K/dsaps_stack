function isValid(str){

    let stack = [];

    for(let char of str){

        if(char === '(' || char === '{' || char === '['){
            stack.push(char)
        }

        else if(char === ')'){
            if(stack.pop() !== '('){
                return false;
            }
        }

        else if(char === '}'){
            if(stack.pop() !== '{'){
                return false;
            }
        }

        else if(char === ']'){
            if(stack.pop() !== '['){
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("({[]})"));
