/**
 * Recursive approach
 */

const arr = [1,2,3,1];

const getMaximumMoneyDP = (arr) => {
    if(!arr.length){
        return 0
    }
    if(arr.length === 1){
        return arr[0]
    }
    if(arr.length === 2){
        return Math.max(arr[0],arr[1])
    }
    let dp = []
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1])
    for(let i = 2 ; i < arr.length; i++){
        dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
    }
    return dp[dp.length-1];
}

console.log(getMaximumMoneyDP(arr))