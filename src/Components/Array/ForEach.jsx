import React from 'react'
import Editor from "../../Container/Editor"
import ContentHeader from '../ContentHeader/ContentHeader'
function ForEach() {
  return (
    <div className='contentStyle'>
      <ContentHeader
        header="Array forEach Method"
      />
      <br />
      <p className='textAlignment'>
        The Javascript forEach is one of the way to iterate the Array of Elements.The Elements may be string, number, boolean, undefined, objects, arrays, all mixed together and so on … can able to iterate.
      </p>
      <p className='forBTSpace'>
        <b > Note: </b>*Important forEach will not call the callback function for empty values in the array.
      </p>
      <p className='forBTSpace'>
        <b > Eg:</b> <span >let arr = {'[1,2,"array","markAntony",true, false, undefined, "{name:Antoty, age:29}", [1,2,3,4]]'} </span>  is the example of all javascript data types present in the array.
      </p>
      <Editor
        defaultCode={
          `let arr = [1,2,3,4,5,6]\n// using arrow function \narr.forEach((n)=>{console.log(n)}) \n// using normal function\n console.log('-----------------') \narr.forEach(function(n){console.log(n)})`}
      />
      <br />
      <p>
        <b > Note: </b>The below one is the example for iteration is not happening or callback function not called for the empty values.
      </p>
      <br />
      <Editor
        defaultCode={
          `let num =[1, 2, 3, 4];\nnum[10] = 10;\nnum.forEach((word) => {\nconsole.log(word);\n});\nconsole.log('---------------');\nconst words = ['one', /*empty */,  'two', /*empty */, 'three', /*empty */,  'four', /*empty */];\nwords.forEach((word) => {\nconsole.log(word); \n});`}
      />
      <br />
      <p className='forBTSpace'>The forEach methods executes a provided function once for each array of elements in ascending-index order.</p>
      <p className='forBTSpace'>In the above part {'(n)=>{} || function(n){}'} referred as the callback function of the forEach methods and this callback function accepts three arguments/parameters.</p>
      <ol style={{ marginLeft: "20px" }}>
        <li><b>Element</b> {'(mandatory) => The value of the current array element'}</li>
        <li><b>index</b>{'(optional) => The current element’s index number'}</li>
        <li><b>array</b>{'(optional) => The array object to which the current element belongs'}</li>
      </ol>
      <br />
      <h3>Another Syntax</h3>
      <br />
      <Editor
        defaultCode={`let num = [1, 2, 3, 4];\n num.forEach(callBackFun);\nfunction callBackFun(n, i, arr) { \nconsole.log(n, i, arr);\n}\n//--------------------\n console.log('-----------------')\n num.forEach(callBackFun1);\nfunction callBackFun1(n) {\nconsole.log(n);\n}`}
      />
      <br />
      <p className='forBTSpace'>
        In the above code arguments like n, i, arr attached to the callbackFun automatically by javascript.
      </p>
      <p className='forBTSpace'>
        Another Important Point, forEach functions expects a synchronous function and it does not work for asynchronous function and does not wait for Promise also.
      </p>
      <h3><b style={{ textDecoration: "underline" }}>Example 1</b></h3>
      <br />
      <Editor
        defaultCode={`function testProm(val) {
                      return new Promise((res) => {
                        res(val);
                      });
                    }
                    let nums = [1, 2, 3, 4, 5];
                    nums.forEach(async (num) => {
                      console.log('start', num);
                      console.log('fromPromise', await testProm(num));
                      console.log('end', num);
                    });`}
      />
      <br />
      <p className='forBTSpace'>
        In the above program, for each iteration a callback function or function will executed simultaneously without wait, because await keyword is inside in the callback function.
      </p>
      <p>
        So the callback function will execute the first line, that console.log(), then move to the second line and in the we have keyword called await, while reaching that word, that function will wait until the result get from the promise , in the mean time the other function from the second iteration will execute and follow the same, once the result get from the promise will execute the below lines, and rest other callback functions also will follow the same procedure.
      </p>
      <br />
      <h3><b style={{ textDecoration: "underline" }}>Example 2</b></h3>
      <br />
      <Editor
        defaultCode={`const nums = [5, 4, 5];
let sum = 0;
const sumFunction = async (a, b) => a + b;
nums.forEach(async (n) => {
  sum = await sumFunction(sum, n);
});
console.log(sum);
// expected output: 14
// Actual output: 0
`} />
      <br />
      <p className='forBTSpace'>
        In the above program for each iteration a callback function will also execute, it will wait for the result from promise, but the forEach will not wait it executes all loops or iteration, after the iteration or loop of forEach the last line console.log(sum) will executed, still the sum value is 0 only, because the callback fun is waiting for result.
      </p>
      <p className='forBTSpace' style={{ fontWeight: "bold" }}><b > Note: </b>break, continue, and return these are not working inside in the forEach</p>
      <p className='forBTSpace'>In JavaScript, the continue, break,statement is typically used within loops like for and while, but it cannot be used directly within a forEach loop. The forEach loop is specifically designed to iterate over elements in an array and execute a provided callback function for each element. It does not support break or continue statements like traditional loops do.</p>
      <p><b style={{ textDecoration: "underline" }}>1.Not able to break the forEach Loop</b></p>
      <br />
      <Editor
        defaultCode={`let arr = [1, 2, 3, 4];
arr.forEach(function(item) {
  console.log(item);
  if (item === 2) 
    break;
});
// Output: Uncaught SyntaxError: Illegal break statement`}
      />
      <br />
      <p className='forBTSpace'>
        The above code throwing an error, because break statement only works in normal for loop
      </p>
      <Editor
        defaultCode={`let arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 2) 
    break;
}
// Output: 1 2`}
      />
      <br />
      <p><b style={{ textDecoration: "underline" }}>2.Not able to 'continue' the forEach Loop</b></p>
      <Editor
        defaultCode={`let arr = [1, 2, 3, 4];
arr.forEach(function (ele) {
  if (ele === 2) 
    continue;
  console.log(ele);
});
// Output: Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement`}
      />
      <br />
      <p className='forBTSpace'>The above code throwing an error, because continue statement only works in normal for loop</p>
      <p className='forBTSpace'><b style={{ textDecoration: "underline" }}>3.'return' doesn't stop looping</b></p>
      <Editor
        defaultCode={`let arr = [1, 2, 3, 4];
arr.forEach(function (ele) {
  console.log(ele);
  if (ele === 2) 
    return;
});
// Output: 1 2 3 4`}
      />
      <br />
      <p className='forBTSpace'>we all know the return keyword is must be the last word of every function, because javascript won’t execute code below the return keyword and after the return keyword js stop executing the function.</p>
      <p className='forBTSpace'>In the above code we attached the return keyword inside in the callback function, thats only we get the ouputs, it won’t throw any error like continue and break.</p>
      <p className='forBTSpace'><b style={{ textDecoration: "underline" }}>Interview Question</b></p>
      <Editor
        defaultCode={`let arr = [1, 2, 3, 4];
arr.forEach((item) => {
  if (item == 2) {
    arr.shift();
  }
  console.log(item);
});
console.log(arr);`}
      />
    </div>
  )
}

export default ForEach

