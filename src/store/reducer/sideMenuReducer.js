import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menus: {
    "Introduction": "",
    "Strings": ["String.at()",
      "String.charAt()",
      "String.charCodeAt()",
      "String.codePointAt()",
      "String.concat()",
      "String.endsWith()",
      "String.fromCharCode()",
      "String.fromCodePoint()",
      "String.includes()",
      "String.indexOf()",
      "String.isWellFormed()",
      "String.lastIndexOf()",
      "String.localeCompare()",
      "String.match()",
      "String.matchAll()",
      "String.normalize()",
      "String.padEnd()",
      "String.padStart()",
      "String.raw()",
      "String.repeat()",
      "String.replace()",
      "String.replaceAll()",
      "String.search()",
      "String.slice()",
      "String.split()",
      "String.startsWith()",
      "String.substring()",
      "String.sup()",
      "String.toLocaleLowerCase()",
      "String.toLocaleUpperCase()",
      "String.toLowerCase()",
      "String.toString()",
      "String.toUpperCase()",
      "String.toWellFormed()",
      "String.trim()",
      "String.trimEnd()",
      "String.trimStart()",
      "String.valueOf()",
    ],
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
    "DataStructures": "",
    "LeetCode":""
  },
  menuVisible: {
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
    "Data Structures": false,
    "LeetCode":false
  }
}

export const mainMenu = createSlice({
  name: 'mainMenuList',
  initialState,
  reducers: {
    menu: (state) => {
    },
    showSubMenu: (state, action) => {
      let copyMenu = { ...state.menuVisible }
      Object.keys(copyMenu).forEach(item => { copyMenu[item] = false }
      )
      state.menuVisible = { ...copyMenu }
      state.menuVisible[action.payload] = true
    },
    closeAllSubMenu: (state) => {
      let copyMenu = { ...state.menuVisible }
      Object.keys(copyMenu).forEach(item => { copyMenu[item] = false }
      )
      state.menuVisible = { ...copyMenu }
    }
  },
})

// Action creators are generated for each case reducer function
export const { menu, showSubMenu, closeAllSubMenu } = mainMenu.actions

export default mainMenu.reducer