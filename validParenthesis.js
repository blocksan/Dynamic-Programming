const arr = "";

const braces = {
    "}":"{",
    ")":"(",
    "]":"["
}
const closed = ["}",")","]"]
const validParenthesis = (arr) => {
    if(arr.length === 0){
        return true
    }

    if(arr.length === 1){
        return false
    }

    let stack = []
    stack[0] = arr[0]
    for(let i =1; i< arr.length; i++){
        
        if(closed.includes(arr[i])){
            let top = stack.pop();
            if(braces[arr[i]] !== top){
                return false;
            }
        }else 
            stack.push(arr[i])
        
    }
    if(stack.length)
    return false
    else
    return true
    
}

console.log(validParenthesis(arr))