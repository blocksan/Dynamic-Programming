/**
 * Iterative approach
 */
// const arr = [-2,1,-3,4,-1,2,1,-5,4];
// const arr = [-2, -1]
// const getMaximumSum = (arr) => {
//     let largestSum = -9999;
//     if(arr.length === 1){
//         return arr[0]
//     }
//     for(let i =1; i<=arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             let temp = 0;
//             for(let k = 0; k<i; k++){
//                 temp += arr[k+j];
//             }
//             if(temp> largestSum){
//                 largestSum = temp;
//             }
//         }
//     }
//     return largestSum;

// }

// console.log(getMaximumSum(arr))

/**
 * Recursive approach
 */

const arr = [-2,1,-3,4,-1,2,1,-5,4];

const getLargestSumDP = (arr) => {
    if(!arr.length){
        return 0
    }
    if(arr.length === 1){
        return arr[0]
    }
    let temp = arr[0];
    let largestSum = arr[0];
    for(let i =1 ; i < arr.length; i++){
        temp = Math.max(temp + arr[i],arr[i]);
        largestSum = Math.max(largestSum, temp);
    }
    return largestSum;
}

console.log(getLargestSumDP(arr))