const router = require('express').Router()
const Contact = require('../mongo/schema')

router.post("/contact", function (req, res) {
    const contact = new Contact({
        name: req.body.Name,
        email: req.body.Email,
        phone_number: req.body.Cellnumber,
        comment: req.body.Comment
    });
    contact.save();
    res.render("success");
});

module.exports = router;