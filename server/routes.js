const express = require('express')
const router = express.Router();
const user = require('./model/userSchema');

router.post('/home', async (req, res) => {

    const {firstName,lastName}=req.body
    
    try {
        if (firstName == '' || lastName == '') {
            return res.status(422).json({ error: "Empty Field" })
        }

        else {
            const newUser = new user({ firstName, lastName });
            await newUser.save().then(() => console.log("User Saved"))
                .catch((err) => console.log("error :", err));
            return res.status(201).json({ message: "Success" })
        }
    } catch (err) {
        console.log(err);
    }

})

module.exports = router
