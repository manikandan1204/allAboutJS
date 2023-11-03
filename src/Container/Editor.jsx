import AceEditor from "react-ace";
import React, { useEffect, useState } from 'react'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function Editor(porps) {
    let consoleMsges = []
    let [code, setCode] = useState("")
    let [consoleMsg, setConsoleMsg] = useState("")
    function onChange(e) {
        setCode(e)
    }
    useEffect(() => {
        eval(code)
    }, [])

    useEffect(() => {
        handleResetBtn()
    }, [porps.defaultCode])
    let console = (function (oldConsole) {
        return {
            getType: function (val) {
                if (typeof val == "string") return "string";
                if (typeof val == "number") return "number";
                if (typeof val == "boolean") return "boolean";
                if (typeof val == "function") return "function";
                if (typeof val == "undefined") return "string";
                if (typeof val == "object" && !Array.isArray(val)) return "object";
                if (typeof val == "object" && Array.isArray(val)) return "array";
            },
            formatOutputVal: function (val) {
                let outputMsg = ""
                switch (this.getType(val)) {
                    case "string":
                        outputMsg = `${val}`
                        break
                    case "array":
                        outputMsg = `Array ${JSON.stringify(val)}`
                        break
                    case "object":
                        outputMsg = `Object ${JSON.stringify(val)}`
                        break
                    default:
                        outputMsg = val
                        break
                }
                return outputMsg
            },
            logMultipleValues: function (val) {
                let mulLogs = ''
                val.forEach((item) => {
                    mulLogs += this.formatOutputVal(item) + ", "
                })
                consoleMsges.push({
                    message: mulLogs,
                    class: `log log-default`
                })
                oldConsole.log.apply(oldConsole, arguments)
                setConsoleMsg([...consoleMsges])
                oldConsole.log(consoleMsges)
            },
            logSingleValue: function (val) {
                oldConsole.log(val)
                consoleMsges.push({
                    message: this.formatOutputVal(val),
                    class: `log log-${this.getType(val)}`
                })
                oldConsole.log(consoleMsges)
                setConsoleMsg([...consoleMsges])
            },
            log: function (text) {
                let argsArr = Array.from(arguments)
                return argsArr.length !== 1 ? this.logMultipleValues(argsArr) : this.logSingleValue(text)
            }
        }
    })(window.console)
    const handleResetBtn = () => {
        setCode(porps.defaultCode)
    }
    const handleRunBtn = () => {
        try {
            eval(code)
        }
        catch (e) {
            consoleMsges.push({
                message: e,
                class: "log-error"
            })
            setConsoleMsg([...consoleMsges])
        }
    }
    const editorBtn = () => {
        setConsoleMsg([])
    }
    return (
        <div className='codeEditor'>
            <AceEditor
                placeholder="Placeholder Text"
                mode="javascript"
                theme="monokai"
                name="blah2"
                width="100%"
                height="200px"
                onChange={onChange}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={code.trim()}
                setOptions={{
                    enableBasicAutocompletion: true,
                    useWorker: false,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }} />
            <div className="editorBtn">
                <button onClick={handleRunBtn}>{'Run >'}</button>
                <button onClick={handleResetBtn}>{'< Reset'}</button>
                <button onClick={editorBtn}>{'Clear >'}</button>
            </div>
            <div>
                <div id="editorResultCode" className="editorResult">
                    <ul id="resultWindow">
                        {
                            consoleMsg.length > 0 && consoleMsg.map((ele, i) => {
                                return (
                                    <li className={ele.class} key={ele + i}>
                                        {">" + "  " + ele.message}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Editor