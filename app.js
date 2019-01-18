const express = require('express') 
const path = require('path') 
const app = express() 
app.use(express.static(path.join(__dirname, 'dist'))) 
app.listen(3000,() => { 
 console.log('app listening on port 3000.') 
})

// "scripts": { 
//     "dev": "node build/dev-server.js", 
//     "build": "node build/build.js", 
//     "server": "nodemon app.js", 
//     "start": "node app.js"
//     },

// "scripts": {
//     "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
//     "start": "npm run dev",
//     "unit": "jest --config test/unit/jest.conf.js --coverage",
//     "build": "node build/build.js"
//   },