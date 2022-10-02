const server = require('./tools/server')

let name;

process.stdout.write('Quel est votre nom ? > ')

process.stdin.on('data',(data)=>{
    name = data.toString().trim()
    server('allan')
})

