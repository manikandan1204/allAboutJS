import React from 'react'
import Editor from '../../Container/Editor'

function LeetCodeComp({ problemHeader, explanations, question, defaultCode }) {
    return (
        <div>
            <br />
            <b>
                {problemHeader}
            </b>
            <br />
            <ol className='orderListStyle'>
                {explanations.map((item) => {
                    return (
                        <li  >
                            {item}
                        </li>
                    )
                })}
            </ol>
            <b >
                <p style={{marginBottom:"10px"}}>Example: 1</p>
            </b>
            <ol className='orderListStyle'>
                {question.map((item) => {
                    return (
                        <li  >
                            {item}
                        </li>
                    )
                })}
            </ol>
            <br />
            <Editor
                defaultCode={defaultCode} />
                <br />
        </div>
    )
}

export default LeetCodeComp