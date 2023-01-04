const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'handlebars')

// app.get('/', (req, res) => {
//   res.render('index', {text: 'Error'})
// })

const userRouter = require('./routes/users')
// const postRouter = require('./routes/post') 

app.use('/users', userRouter)

app.listen(3001, () => console.log('Server Started'))