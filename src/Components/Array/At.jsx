import React from 'react'
import Editor from "../../Container/Editor"
import ContentHeader from '../ContentHeader/ContentHeader'
function At() {
  return (
    <div className='contentStyle'>
      <ContentHeader
        header="Array At Method"
      />
      <br />
      <p className='textAlignment'>
        This methods accepts only one parameter(single value) and its is not mandatory, if parameter is not passed means its return the first element (0th position of the array), because default parameter value is 0
      </p>
      <p className='forBTSpace'>
        The JavaScript .at() method allows developers to seamlessly grab elements based on their indexes.
      </p>
      <br />
      <Editor
        defaultCode={`let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.at(3)); // 4
console.log(arr.at(-2)); // 9
console.log(arr.at()); // 1
console.log(arr.at() === arr[0]); //true
`} />
      <br />
      <p className='forBTSpace'>
        The <b> Array.at</b> Array.at method accepts a integer value and return the element at that index.It accepts
      </p>
      <p className='forBTSpace'>
        <ol style={{ marginLeft: "25px" }}>
          <li>
            Positive value
          </li>
          <li>
            Negative value
          </li>
        </ol>
      </p>
      <p className='forBTSpace'>
        <b> Positive </b>value will count forward from the start of the array, where as
        <b> Negative </b> value count back from the last item in the array.
      </p>
    </div>
  )
}

export default At