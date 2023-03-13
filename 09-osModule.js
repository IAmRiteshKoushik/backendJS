const os = require('os')  // Inbuilt module

// Info about current user
const user = os.userInfo()
console.log(user)

// Method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

// Getting some useful data about the OS
const currentOS = {
    os_type: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)
