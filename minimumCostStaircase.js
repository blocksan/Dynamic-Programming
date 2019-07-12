const stairsCount = [1,100,1,1,1,100,1,1,100,1];

const hash = []
const waysToTop = (stairs, position) => {
    if(position === stairsCount.length ){
        return 1
    }
    if(stair < 0){
        return 0
    }

    if(hash[stair]){
        return hash[stair]
    }

    hash[stair] = waysToTop(stairs, position+1) + waysToTop(stairs, position+2)
    return hash[stair]
}

console.log(waysToTop(stairsCount));