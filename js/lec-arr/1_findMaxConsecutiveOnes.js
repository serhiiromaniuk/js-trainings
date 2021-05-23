/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.
Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
*/

var findMaxConsecutiveOnes = function(nums) {
    let out = []
    let result = 0
    nums.forEach((el, i) => {
        if (el === 0) {
            out.push(result)
            result = 0
        } else {
            result += el
        }
    })
    out.push(result)
    return Math.max(...out)
};