import React, { useState, useEffect,Fragment } from 'react'

function Sidebar() {
  let menuVisible =
  {
    "Introduction": false,
    "Strings": false,
    "Arrays": false,
    "Promise": false,
    "Async/Await": false,
    'IIFE': false,
    "Closure": false,
    'Hoisting': false,
    "Callbacks": false,
    "Inheritance": false,
    "Polymorphism": false,
    "HOC": false,
    "Recursion": false,
    "Data Structures": false
  }

  let sideMenuProp = {
    "Introduction": "", "Strings": "",
    "Arrays": ['Array.at()', 'Array.concat()', 'Array.copyWithin()', 'Array.entries()', 'Array.every()', 'Array.fill()', 'Array.filter()', 'Array.find()', 'Array.findIndex()', 'Array.findLast()', 'Array.findLastIndex()', 'Array.flat()', 'Array.flatMap()', 'Array.forEach()', 'Array.from()', 'Array.fromAsync()', 'Array.includes()', 'Array.indexOf()', 'Array.isArray()', 'Array.join()', 'Array.keys()', 'Array.lastIndexOf()', 'Array.map()', 'Array.of()', 'Array.pop()', 'Array.push()', 'Array.reduce()', 'Array.reduceRight()', 'Array.reverse()', 'Array.shift()', 'Array.slice()', 'Array.some()', 'Array.sort()', 'Array.splice()', 'Array.toLocaleString()', 'Array.toReversed()', 'Array.toSorted()', 'Array.toSpliced()', 'Array.toString()', 'Array.unshift()', 'Array.values()', 'Array.with()'],
    "Promise": "",
    "Async/Await": "",
    'IIFE': "",
    "Closure": "",
    'Hoisting': "",
    "Callbacks": "",
    "Inheritance": "",
    "Polymorphism": "",
    "HOC": "",
    "Recursion": "",
    "Data Structures": ""
  }
  let [sideMenu, setSideMenu] = useState(menuVisible)
  let [left, setLeft] = useState(0)
  let [top, setTop] = useState(0)
  const handleSideMenu = (item) => {
    // let el = document.getElementById(item)
    // let elementRect = el.getBoundingClientRect();
    let sideBar = document.getElementById('sidebarMenu')
    let sidebarSpace = sideBar.getBoundingClientRect()
    var spaceToBottom = window.innerHeight - sidebarSpace.bottom;
    setLeft(sidebarSpace.width)
    setTop(sidebarSpace.top)
    let copySideMenu = { ...menuVisible }
    Object.keys(copySideMenu).forEach(ele => {
      copySideMenu[ele] = false
    })
    copySideMenu[item] = sideMenu[item] ? false : true
    setSideMenu(copySideMenu)
  }
  window.addEventListener("resize", ()=>{
    let sideBar = document.getElementById('sidebarMenu')
    let sidebarSpace = sideBar.getBoundingClientRect()
    var spaceToBottom = window.innerHeight - sidebarSpace.bottom;
    setLeft(sidebarSpace.width)
    console.log('sideBar.width: ', sidebarSpace.width);
    setTop(sidebarSpace.top)
  });
  
  useEffect(() => {
    let checkSubMenuEnable = Object.keys(sideMenu).some(ele => {
     return sideMenu[ele]
    })
   try{if(checkSubMenuEnable){
    document.getElementById("headerContent").addEventListener("click", ()=>{
      let copySideMenu = { ...menuVisible }
      Object.keys(copySideMenu).forEach(ele => {
        copySideMenu[ele] = false
      })
      setSideMenu(copySideMenu)
    });
    document.getElementById("mainContent").addEventListener("click", ()=>{
      let copySideMenu = { ...menuVisible }
      Object.keys(copySideMenu).forEach(ele => {
        copySideMenu[ele] = false
      })
      setSideMenu(copySideMenu)
    });}
  }catch(err){
    console.log("err",err)
  }
})
  
  return (
    <div id='sidebarMenu' className='sidebar'>
      {Object.keys(sideMenuProp).map((item, key) => {
        if (item == "Arrays") {
          return (
            <Fragment key={key}>
              <p  key={key}   id={item} onClick={() => handleSideMenu(item)}>
                <a>
                  {item}
                </a>
              </p>
              <div className='subMenu' style={{ display: sideMenu[item] ? "block" : "none", left, top }}>
                {sideMenuProp[item].length > 0 ?
                  sideMenuProp[item].map((ele, i) => {
                    return (
                      <p key={"a" + i}   >{ele}</p>
                    )
                  })
                  : ""}
              </div>
            </Fragment>
          )
        } else {
          return (
            <Fragment key={key}>
              <p id={item} onClick={() => handleSideMenu(item)}>
                <a href={`/${item.toLocaleLowerCase()}`}>
                  {item}
                </a>
              </p>
              <div className='subMenu' style={{ display: sideMenu[item] ? "block" : "none", left, top }}>
                {sideMenuProp[item].length > 0 ?
                  sideMenuProp[item].map((ele, i) => {
                    return (
                      <p key={"a" + i}   >{ele}</p>
                    )
                  })
                  : ""}
              </div>
            </Fragment>
          )
        }
      })}
    </div>
  )
}

export default Sidebar