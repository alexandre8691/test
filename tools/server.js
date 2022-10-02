const path = require('path')
const express = require('express')


const server = (name)=>{

    const publicPath = path.join(__dirname,'../public')

    const app = express()

    app.use(express.static(publicPath))

    app.get('',(req,res)=>{
        res.send('')
    })

    app.listen(3000,()=>{
        console.log('server is up !')
    })
  
}

module.exports = server