# cheng

> ccc

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# node 搭建本地服务步骤
npm install express body-parser  --save  

根目录下 建 app.js

const express = require('express') 
const path = require('path') 
const app = express() 
app.use(express.static(path.join(__dirname, 'dist'))) 
app.listen(3000,() => { 
 console.log('app listening on port 3000.') 
})

package.json 更改

"scripts": { 
 "dev": "node build/dev-server.js", 
 "build": "node build/build.js", 
 "server": "nodemon app.js", 
 "start": "node app.js"
 },

 启动命令 npm run start