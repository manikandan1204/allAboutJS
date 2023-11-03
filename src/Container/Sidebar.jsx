import React, { useState, useEffect, Fragment } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { showSubMenu, closeAllSubMenu } from '../store/reducer/sideMenuReducer'
import { useLocation } from 'react-router-dom';
function Sidebar() {
  let dispatch = useDispatch()
  let currentLocation = useLocation()
  const mainMenu = useSelector((state) => state.mainMenu.menus)
  const sideMenu = useSelector((state) => state.mainMenu.menuVisible)
  let [left, setLeft] = useState(0)
  let [top, setTop] = useState(0)
  let [currentPath,setCurrentPath] = useState(currentLocation.pathname)
  const handleSideMenu = (item) => {
    dispatch(showSubMenu(item))
    // document.getElementById('sidebarMenu').children.forEach((ele)=>{
    //   console.log('ele.childNodes[0]: ', ele.childNodes[0]);
    // })
    // document.getElementById(item.toLocaleLowerCase()).childNodes[0].style.color="deepskyblue"
    let sideBar = document.getElementById('sidebarMenu')
    let sidebarSpace = sideBar.getBoundingClientRect()
    setLeft(sidebarSpace.width)
    setTop(sidebarSpace.top)
  }
  useEffect(()=>{
    setCurrentPath(currentLocation.pathname)
    // document.getElementById(currentPath.replace("/","")).childNodes[0].style.color="deepskyblue"
    // console.log('document.getElementById(currentPath.replace("/","")): ', currentPath);
  },[currentLocation.pathname])
  window.addEventListener("resize", () => {
    let sideBar = document.getElementById('sidebarMenu')
    let sidebarSpace = sideBar.getBoundingClientRect()
    setLeft(sidebarSpace.width)
    setTop(sidebarSpace.top)
  });

  useEffect(() => {
    let checkSubMenuEnable = Object.keys(sideMenu).some(ele => {
      return sideMenu[ele]
    })
    try {
      if (checkSubMenuEnable) {
        document.getElementById("headerContent").addEventListener("click", () => {
          dispatch(closeAllSubMenu())
        });
        document.getElementById("mainContent").addEventListener("click", () => {
          dispatch(closeAllSubMenu())
        });
      }
    } catch (err) {
      console.log("err", err)
    }
  })
  const handleMenuVisibleHidden=(id)=>{
    Object.keys(mainMenu).forEach(element => {
      if(Array.isArray(mainMenu[element])){
        mainMenu[element].forEach(ele=>{
          document.getElementById(ele.split(".")[1].replace("()","").toLocaleLowerCase()).style.removeProperty("color")
        })
      }
      document.getElementById(element.toLocaleLowerCase()).classList.remove("activeMenu")
    });
    // document.getElementById(id).classList.add("activeMenu")
  }
  const handleMainMenu=(mainId)=>{
    handleMenuVisibleHidden(mainId)
  }
  const hanleSideSubMenu=(id,mainId)=>{
    handleMenuVisibleHidden(mainId)
    dispatch(closeAllSubMenu())
    document.getElementById(id).style.color="deepskyblue"
    document.getElementById(mainId+'s').classList.add("activeMenu")
  }
  return (
    <div id='sidebarMenu' className='sidebar'>
      {Object.keys(mainMenu).map((item, key) => {
        if (Array.isArray(mainMenu[item])) {
          return (
            <Fragment key={key}>
              <p onClick={()=>handleMainMenu(item.toLocaleLowerCase())} className={currentPath.replace("/","")==item.toLocaleLowerCase()?"activeMenu":""} key={key} id={item.toLocaleLowerCase()} onMouseEnter={() => handleSideMenu(item)}>
                <Link  to={`/${item.toLocaleLowerCase()}`}>
                  {item}
                </Link>
              </p>
              <div className='subMenu' style={{ display: sideMenu[item] ? "block" : "none", left, top }}>
                {mainMenu[item].length > 0 ?
                  mainMenu[item].map((ele, i) => {
                    return (
                      <Link  key={"a" + i} to={`${item.toLocaleLowerCase()}/${ele.toLocaleLowerCase().split(".")[1].replace("()","")}`}>
                        <p id={ele.toLocaleLowerCase().split(".")[1].replace("()","")}  onClick={()=>{ hanleSideSubMenu(ele.toLocaleLowerCase().split(".")[1].replace("()",""),ele.toLocaleLowerCase().split(".")[0])}}  >
                          {ele}
                        </p>
                      </Link>
                    )
                  })
                  : ""}
              </div>
            </Fragment>
          )
        } else {
          return (
            <Fragment key={key}>
              <p onClick={()=>handleMainMenu(item.toLocaleLowerCase())} className={currentPath.replace("/","")==item.toLocaleLowerCase()?"activeMenu":""} id={item.toLocaleLowerCase()} onMouseEnter={() => handleSideMenu(item)}>
                <Link to={`/${item.toLocaleLowerCase()}`}>
                  {item}
                </Link>
              </p>
              <div className='subMenu' style={{ display: sideMenu[item] ? "block" : "none", left, top }}>
                {mainMenu[item].length > 0 ?
                  mainMenu[item].map((ele, i) => {
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