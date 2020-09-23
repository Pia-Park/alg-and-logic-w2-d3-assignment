//Eduardo and INAE

function swap(arr, first, second){
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

function bubble(nums){
    let len = nums.length,
        i, j, stop;
    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (nums[j] > nums[j+1]){
                swap(nums, j, j+1);
            }
        }
    }
    return nums;
}

console.log(bubble([5, 7, 9, 4, 1, 8, 25, 3]));
console.log(bubble([46, 2, 34, 90, 56, 27]));
console.log(bubble([5, 7, 98, 36, 47, 45, 5, 2]));

// let nums = [5, 7, 9, 4, 1, 8, 25, 3];
// let otherNums = [46, 2, 34, 90, 56, 27];
// let finalTest = [5, 7, 98, 36, 47, 45, 5, 2]

// const bubbleSort = function(arr){
//     let swap = 0;
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length - 1 - i; j++){
//             if(arr[j] > arr[j + 1]){
//                 swap = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = swap;
//             }
//         }
//     }
//     return arr;
// }

// // console.log(bubbleSort(nums));
// // console.log(bubbleSort(otherNums));
// console.log(bubbleSort(finalTest));