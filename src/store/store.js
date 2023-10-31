import { configureStore } from '@reduxjs/toolkit'
import mainMenu from './reducer/sideMenuReducer'
export const store = configureStore({
  reducer: {
    mainMenu
},
})