import logo from './logo.svg';
import './App.css';
import './style/main.css'
import React from 'react'
import Header from './Container/Header'
import Sidebar from './Container/Sidebar'
import {
  useRoutes
} from "react-router-dom";
import Introduction from './Container/Introduction';
import Strings from './Container/Strings';
// const router = createBrowserRouter([
//   {
//     path: "/introduction",
//     element: <Introduction/>,
//     // errorElement:<NotFound/>
//   },
//   {
//     path: "/strings",
//     element: <strings/>,
//   }
// ]);
const routes = [
  {
      path: '/introduction',
      element: <Introduction />,
  },
  {
    path: '/strings',
    element: <Strings />,
},
]
function App() {
  // let arr = ['Array.at()','Array.concat()','Array.copyWithin()','Array.entries()','Array.every()','Array.fill()','Array.filter()','Array.find()','Array.findIndex()','Array.findLast()','Array.findLastIndex()','Array.flat()','Array.flatMap()','Array.forEach()','Array.from()','Array.fromAsync()','Array.includes()','Array.indexOf()','Array.isArray()','Array.join()','Array.keys()','Array.lastIndexOf()','Array.map()','Array.of()','Array.pop()','Array.push()','Array.reduce()','Array.reduceRight()','Array.reverse()','Array.shift()','Array.slice()','Array.some()','Array.sort()','Array.splice()','Array.toLocaleString()','Array.toReversed()','Array.toSorted()','Array.toSpliced()','Array.toString()','Array.unshift()','Array.values()','Array.with()']
  const allRoutes = useRoutes(routes);
  return (
        <div className='landingPage'>
            <Header></Header>
            <Sidebar></Sidebar>
            {allRoutes}
        </div>
  );
}


export default App;
