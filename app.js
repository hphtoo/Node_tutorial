// NPM      -   global command, come with node
// >npm --version

// local dependency -   use it only in this particular project
// >npm i <package name>

// global dependency    -   use it in any project
// >npm install -g <package name>
// > sudo install -g <package name> (mac)

// package.json - manifest file (stores important info about project/package). Three way:
// 1. manual approach (create package.json in the root, create properties etc)
// 2. >npm init (step by step, press enter to skip)
// 3. >npm init -y (everything default)
// Once created, the package becomes a dependency

// install "lodash" package
// >npm i lodash    - install lodash. Once installed the dependency should be added to package.json
// all dependeicies are under "node_modules" folder

// always install/instantiate external dependencies first
const _ = require('lodash') 
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)