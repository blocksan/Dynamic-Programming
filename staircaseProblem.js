const stairsCount = 3;

const hash = []
const waysToTop = (stair) => {
    if(stair === 0 ){
        return 1
    }
    if(stair < 0){
        return 0
    }

    if(hash[stair]){
        return hash[stair]
    }

    hash[stair] = waysToTop(stair-1) + waysToTop(stair-2)
    return hash[stair]
}

console.log(waysToTop(stairsCount));