
/**
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = (nums) => {
    nums.forEach((el, i) => {
        nums.splice(i, 1, Math.pow(el, 2))
    })
    return nums.sort((a, b) => a - b)
};