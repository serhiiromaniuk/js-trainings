/**
 * @param {number[]} arr
 * @return {boolean}
 * N = 2 * M
 */
var checkIfExist = function(arr) {
    let result = false
    arr.forEach(
        (e, i) => {
            if (e === arr[i + 1] && e === 0) result = true
            arr.forEach(
                (el) => {
                    if (e === 0 || el === 0) return
                    if (e == 2 * el) result = true
                }
            )    
        }
    )
    return result
};


console.log(
    checkIfExist([10,2,5,3]),
    checkIfExist([7,1,14,11]),
    checkIfExist([-2,0,10,-19,4,6,-8]),
    checkIfExist([0,0])
)