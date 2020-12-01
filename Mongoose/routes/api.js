const express = require('express')
const router = express.Router()
const person = require('../models/person')
router.get('/people', function (req, res) {
    person.find({}, function (err, people) {
        res.send(people)
    })
})
router.post('/person', function (req, res) {
    const info = req.body
    let person = new Person({
        firstName: info.firstName,
        lastName: info.lastName,
        age: info.age
    })
    person.save()
    res.end()
})
router.put('/person/:id', function (req, res) {
    const id = req.params.id
    Person.findByIdAndUpdate(id, {age:80}, function (err, person) {
    })
    res.end()
})
router.delete('/apocalypse', function (req, res) {
    Person.find({}, function (err, people) {
        people.forEach(p => p.remove())
    })
    res.end()
})

module.exports = router