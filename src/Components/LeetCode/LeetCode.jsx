import React from 'react'
import ContentHeader from '../ContentHeader/ContentHeader'
import Editor from '../../Container/Editor'
import LeetCodeComp from './LeetCodeComp'
function LeetCode() {
    return (
        <div className='contentStyle'>
            <ContentHeader
                header="LeetCode Problems"
            />
            <LeetCodeComp
                problemHeader="1. Concatenation of Array"
                explanations={["Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).",
                    " Specifically, ans is the concatenation of two nums arrays.", "Return the array ans."
                ]}
                question={[`Input: nums = [1,2,1]`, `Output: [1,2,1,1,2,1]`,
                    `Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]`]}
                defaultCode={`
let num = [1,2,3,4]
var getConcatenation = function(nums) {
    let result = []
    for(let i=0;i<nums.length;i++){
        result[i] = nums[i]
        result[i+nums.length] = nums[i]
    }
return result
};
console.log(getConcatenation(num))`}
            />
            <LeetCodeComp
                problemHeader="2. Two Sum"
                explanations={["Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
                    " You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order."
                ]}
                question={[`Input: nums = [2,7,11,15]`, `target = 9`,
                    `Output: [0,1]`, `Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`]}
                defaultCode={`
        let nums = [2, 4, 11, 7];
let target = 9;
function twoSum(values, t) {
  let obj = {};
  for (let i = 0; i < values.length; i++) {
    if (obj.hasOwnProperty(values[i])) {
      return [obj[values[i]], i];
    } else {
      obj[t - values[i]] = i;
    }
  }
}
console.log(twoSum(nums, target));`}
            />

            <LeetCodeComp
                problemHeader="3. Build Array from Permutation"
                explanations={["Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.",
                    "A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive)."
                ]}
                question={[`Input: nums = [0,2,1,5,3,4]`,
                    `Output: [0,1,2,4,5,3]`,
                    `Explanation: The array ans is built as follows: 
                        ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
                            = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
                            = [0,1,2,4,5,3]`]}
                defaultCode={`
let numbers = [5,0,1,2,3,4]
let buildArray = function(nums) {
    const res = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[nums[i]];
    }
    return res;
};
console.log(buildArray(numbers));`}
            />

            <LeetCodeComp
                problemHeader="4. Number of Good Pairs"
                explanations={["Given an array of integers nums, return the number of good pairs.",
                    "A pair (i, j) is called good if nums[i] == nums[j] and i < j."
                ]}
                question={[`Input: nums = [1,2,3,1,1,3]`,
                    `Output: 4`,
                    `Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.`]}
                defaultCode={`
    let numbers = [1,2,3,1,1,3]
    var numIdenticalPairs = function (nums) {
  const pairs = {};
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in pairs) {
      count += pairs[nums[i]];
    }
    pairs[nums[i]] = (pairs[nums[i]] || 0) + 1;
  }
  return count;
};
 console.log(numIdenticalPairs(numbers));`}
            />
        </div>
    )
}

export default LeetCode