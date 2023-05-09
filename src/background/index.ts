import { io } from 'socket.io-client'
// import { browser } from 'webextension-polyfill-ts'

// www.npmjs.com/package/chrome-types
// https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/

const socket = io('http://localhost:3000')

socket.on('connect', () => {
  console.log('connected')
})

// const socket = new WebSocket('ws://localhost:3000')

console.log('fuck')

console.log(socket)
