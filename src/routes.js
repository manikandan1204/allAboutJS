import Introduction from './Container/Introduction';
import Strings from './Container/Strings';
import NotFound from './Container/NotFound'
import AllArrayComp from './Container/Array/ExportAllArrayComp'
import AllMainComp from './Container/ExportMainComponents'
import LeetCode from './Container/LetCodeProb'
function generateComp(main,comp){
 let routes =  Object.keys(comp).map(item=>{
    let Item = comp[item]
    return{
      path:main+item.toLocaleLowerCase(),
      element:<Item/>
    }
  }) 
  return routes
}

let arrayComp = generateComp("arrays/",AllArrayComp)
let mainComp = generateComp("",AllMainComp)
export const routes = [
  {
    path: '/',
    element: <Introduction />,
  },
  {
    path: '/leetcode',
    element: <LeetCode />,
  },
  {
    path: 'strings',
    element: <Strings />,
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
  ...arrayComp,
  ...mainComp
]

