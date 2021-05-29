/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let max = Math.max(...arr);
    let r = true
    let countMax = 0
    let indexMax = 1

    if (arr.length < 3 ) return false
    if (arr[0] === max || arr[arr.length - 1] === max) return false

    arr.forEach(
        (el, i) => {
            if (el === max) {
                countMax++
                indexMax = i
            } else if (arr[i] === arr[i + 1]) {
                return r = false
            }
        }
    )
    if (countMax > 1 || !r) return false

    for (let i = 0; i < indexMax; i++) {
        if (!r) break
        if (arr[i] < arr[i + 1]) r = true
        if (arr[i] > arr[i + 1]) r = false
    }

    for (let i = indexMax; i < arr.length; i++) {
        if (arr[i + 1] === undefined || !r) break
        if (arr[i] > arr[i + 1]) r = true
        if (arr[i] < arr[i + 1]) r = false
    }


    return r
};


console.log(
    validMountainArray([2,1]),
    validMountainArray([3,5,5]),
    validMountainArray([0,3,2,1]),
    validMountainArray([0,1,2,3,4,5,6,7,8,9]),
    validMountainArray([1,7,9,5,4,1,2]),
    validMountainArray([3,7,6,4,3,0,1,0]),
    validMountainArray([3,6,5,6,7,6,5,3,0]),
    validMountainArray([6,7,7,8,6])
)