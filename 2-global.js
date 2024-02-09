// GLOBALS - NO WINDOW 

// __dirname   -  path to current directory
// __filename  -  file name
// require     -  function to use modules (CommonJS)
// module      -  info about current module (file)
// process     -  info about env where the program is being executed

console.log(__dirname);

// This function prints out the text every second forever, until interrupted by using CTRL+c
setInterval(()=>{
    console.log('hello world')
  }
, 1000
)
