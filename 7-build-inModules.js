// Built-in Module: OS
// ---------------------
const os = require('os')

// current user information
const user = os.userInfo()
console.log(user)

// system uptime in seconds
console.log('System uptime is ' + os.uptime())

// OS information
const currentOS = {
      name: os.type()
    , release: os.release()
    , totalMem: os.totalmem()
    , freeMem: os.freemem()
}
console.log(currentOS)

// Built-in Module: path
// ---------------------
const path = require('path')
console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)
//filename only
console.log(path.basename(filePath))
//absolute path
console.log(path.resolve(__dirname,'content','subfolder','test.txt'))

// Built-in Module: fs (file system)
// ---------------------------------
// Sync method:
// Going throught each line of code sequencially, holding the files reading, blocking from other users to use the file.
// It could be a problem if the file is huge and it takes a long time to read the files.
const {readFileSync, writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log(first,second)

writeFileSync(
    './content/result-sync.txt'
    , first + second
    , {flag: 'a'}       // append
)

// aSync method:
// Resources are being hold up by processes, like Sync method.
// Alternatively, you can use "Promise", Sync await
const {readFile, writeFile} = require('fs')

// callback function
//readFile('./content/first.txt', (err, result) => {
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result

    // read the second file
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result

        // write results to a file
        writeFile(
            './content/result-async.txt'
            , 'async data : ' + first + second
            , {flag : 'a'}
            , (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})
