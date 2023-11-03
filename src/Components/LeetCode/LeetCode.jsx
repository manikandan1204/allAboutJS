import React from 'react'
import ContentHeader from '../ContentHeader/ContentHeader'
import Editor from '../../Container/Editor'

function LeetCode() {
    return (
        <div className='contentStyle'>
            <ContentHeader
                header="LeetCode Problems"
            />
            <br />
            <b>
                <p>1. Concatenation of Array</p>
            </b>
            <br />
            <p className='textAlignment'>
                {'Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).'}
                &nbsp; Specifically, ans is the concatenation of two nums arrays.
                Return the array ans.
            </p>
            <b>
                <p>Example: 1</p>
            </b>
            <p className='textAlignment'>
                {`Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]\n
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]`}
            </p>
            <br />
            <Editor
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
            <br />
            <b>
                <p>2. Two Sum</p>
            </b>
            <p className='textAlignment'>
                Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
            </p>
            <p className='forBTSpace'>
                You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
            </p>
            <p>
                <b>
                    Example 1:
                </b>{`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`}
            </p>
            <br />
            <Editor
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
console.log(twoSum(nums, target));`} />
<br />
        </div>
    )
}

export default LeetCode