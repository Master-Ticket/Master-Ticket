const express = require('express')
const router = express.Router()

router.get('/myevents', (req, res) => {
    res.send('My Saved Events')
})

router.get('/:id', (req, res) => {
    console.log(req.user)
    res.send (`Events for user ${req.params.userId}`)
})
  
router.get('/new', (req, res) => {
    res.send('User New Form')
})

// router.post('/', (req, res) => {
//     res.send('Create User')
// })

const users = [{name: 'Kyle'}, {name: 'Sally'}]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router