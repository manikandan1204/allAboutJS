import Introduction from './Container/Introduction';
import Strings from './Container/Strings';
import Array from './Container/Array/Array';
import ForEach from './Container/Array/ForEach';
import Every from './Container/Array/Every';
export const routes = [
  {
    path: '/',
    element: <Introduction />,
  },
  {
    path: 'introduction',
    element: <Introduction />,
  },
  {
    path: 'arrays/',
    element: <Array />,
    children: [
     
    ]
  },
  {
    path: 'arrays/foreach',
    element: <ForEach />,
  },
  {
    path: 'arrays/every',
    element: <Every />,
  },
  {
    path: 'strings',
    element: <Strings />,
  },

]

