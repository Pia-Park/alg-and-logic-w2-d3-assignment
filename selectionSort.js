//Eduardo and INAE

let nums = [5, 7, 9, 4, 1, 8, 25, 3];
let otherNums = [46, 2, 34, 90, 56, 27];
let finalTest = [5, 7, 98, 36, 47, 45, 5, 2]

const selectionSort = function(arr){
    for(let i = 0; i < arr.length; i++){
        let lowestIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[lowestIndex] > arr[j]){
                lowestIndex = j;
            }
        }
        if(lowestIndex !== i){
            let swap = arr[lowestIndex];
            arr[lowestIndex] = arr[i];
            arr[i] = swap;
        }
    }
    return arr;
}

// console.log(selectionSort(nums));
// console.log(selectionSort(otherNums));
console.log(selectionSort(finalTest));