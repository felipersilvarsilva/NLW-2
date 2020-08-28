
//Servidor
const express = require('express')
const server = express()
const  {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//consfigura nunjucks
const nunjucks = require ('nunjucks')
nunjucks.configure("src/views",{
    express: server,
    noCache: true,
})
//inicio da configuraçao de servido 
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true}))
//configura arquivos estáticos (css, scripts, imagens)
.use(express.static('public'))
//rotas de aplicação
.get('/', pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servido
.listen(5500)
