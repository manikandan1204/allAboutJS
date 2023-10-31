import React from 'react'
import Editor from "../../Container/Editor"
import ContentHeader from '../ContentHeader/ContentHeader'

function Every() {
  return (
    <div className='contentStyle'>
      <ContentHeader
        header="Array Every Method"
      />
      <br />
      <p className='textAlignment'>
        The every() method executes a callback function for each element in the array of iteration.Every method accepts two arguments one is callback function and the another one is thisArg.
        Every does not mutate or modify the original array, but the function provided as callback function can able to modify the original array.
      </p>
      <p className='forBTSpace'>
        <span>Note:</span> however, that the length of the array is saved before the first iteration of callback function.
      </p>
      <p className='forBTSpace'>
        Callback function will not visit any elements added beyond the array's initial length when the call to every() began.
      </p>
      <p className='forBTSpace'>
        <b>Callback function</b> accepts 3 arguments like <b> current element, index, and the original array </b>.Index and the original array are optional. Current element is the element of each iteration in the array.
      </p>
      <p className='forBTSpace'>
        <b>thisArg</b> this parameter is optional, it holds the context to be passed as this is to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.
      </p>
      <p className='forBTSpace'>
        Every method returns boolean values only that is true or false.Based on the user condition it returns the Boolean value
      </p>
      <p className='forBTSpace'>
        Once the callback function returns the false value the every method stops the iteration and returns the false value.
      </p>
      <Editor
        defaultCode={`let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let isValuesLessThan5 = arr.every((ele, i) => {
  console.log('Iteration' + '_' + i, ele); 
   return ele < 5;
});
console.log('isValuesLessThan5', isValuesLessThan5);
`} />
      <br />
      <p className='forBTSpace'>
        The above code stops the iteration when the callback functions returns false value, so the code stops at the 5th iteration, in the 5th the callback returns false.
      </p>
      <Editor
        defaultCode={`let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let isValuesLessThan9 = arr.every((ele, i) => {
  console.log('iteration' + '_' + i, ele);
  return ele < 9;
});
console.log('isValuesLessThan9', isValuesLessThan9);
`} />
      <br />
      <Editor
        defaultCode={`let arr = [1, 2, 3, 4, 5, 6, 7, 8];
function checkGreaterOrNot(ele, i) {
  console.log('iteration' + '_' + i, ele);
  return ele < 9;
}
let isValuesLessThan9 = arr.every(checkGreaterOrNot);
console.log('isValuesLessThan9', isValuesLessThan9);
`} />
      <br />
      <p className='forBTSpace'>
        It does not specifically check for empty values by default. Instead, it checks whether the callback function returns true for every element in the array.
      </p>
      <Editor
        defaultCode={`let arr = [3, 4, , 5, 6, 7, , , 8];
let checkValueGreaterThan2 = arr.every((item) => {
  return item > 2;
});
console.log(checkValueGreaterThan2);  // true
`} />
      <br />
      <p className='forBTSpace'>
        Evevry method in JavaScript will not run its predicate on empty slots (sparse arrays). It only checks the elements that have been explicitly set in the array and skips any empty or undefined slots.
      </p>
      <p className='forBTSpace'>
        This is why the above code returns true.
      </p>
      <p className='forBTSpace'>
        <b>Modifying the original Array elements</b>
      </p>
      <p className='forBTSpace'>
        will check whether the conditions satisfied or not ,after modifying the array elements of each iteration
      </p>
      <Editor
        defaultCode={`let arr = [1, 2, 3, 4];

let lessThan3 = arr.every((item, i) => {
  if (i + 1 < arr.length) {
    arr[i + 1] -= 2;
  }
  console.log('item', item);
  return item <= 2;
});

console.log('lessThan3', lessThan3); //lessThan3 true

console.log(arr); //[ 1, 0, 1, 2 ]

// output console.log('item', item);

//item 1
//item 0
//item 1
//item 2`} />
      <p className='forBTSpace'>
        For each iteration we change the next index value to reduce 2, so that the reason the condition is satisfied
      </p>
      <p className='forBTSpace'>
        <b>Delete the array elements</b>
      </p>
      <p className='forBTSpace'>
      We can even delete elements from an array in the every loop:
      </p>
      <Editor
        defaultCode={`let arr = [5, 12, 14, 55, 65];
let check = arr.every((el, index, array) => {
  arr.pop();
  return el < 15;
});
console.log(check) // true
console.log(arr);//[5,12]`} />
<br />
<p className='forBTSpace'>
In the above code array index 3 and 4 is not satisfied the condition , the callback function returns false only, but each iteration we removed the last item from the original array, so for the first and second iteration 55 and 65 removed from the array and third iteration 14 also removed , the callback condition satisfied and every return true.
</p>
<p className='forBTSpace'>
        <b>Adding the element to the Array</b>
      </p>
      <Editor
        defaultCode={`let arr = [1, 2, 3, 4, 5];

let lessThan6 = arr.every((item) => {
  arr.push(item + 5);
  return item < 6;
});

console.log(lessThan6); //true
console.log(arr); //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]`} />
<br />
<p className='forBTSpace'>
Note, however, that the length of the array is saved before the first iteration of callback function.
</p>
<p className='forBTSpace'>
callback function will not visit any elements added beyond the array’s initial length when the call to every() began.
</p>
<p className='forBTSpace'>
The initial array elements less than 6 only, so the every methods return true, because it will not call the callback function beyond the array’s initial length.
</p>
    </div>
  )
}

export default Every