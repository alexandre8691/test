const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000

const server = (name)=>{

    const publicPath = path.join(__dirname,'../public')

    const app = express()

    app.use(express.static(publicPath))

    app.get('',(req,res)=>{
        res.send('')
    })

    app.listen(port,()=>{
        console.log('server is up !')
    })
  
}

module.exports = server