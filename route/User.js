const express = require('express');
const UserInfo = require('../model/UserInfo');
const router = express.Router();

router.post("/login", async (req, res) => {
    const { uemail, upass } = req.body;
    console.log(req.body);
    const user = await UserInfo.findOne({ uemail: uemail });
    if (user) {
        if (await bcrypt.compare(upass, user.upass)) {
            var token = jwt.sign(
                { email: user.uemail, pass: upass },
                `${process.env.TOCKEN_PRIVATE_KEY}`
            );

            res.status(200).send({
                data: user,
                cookie: token,
                type: "user",
                message: `Hello ${user.uname}, You Logged in successfully!`,
            });
        } else
            res.status(201).send({ message: "Error! : *** Invalid Password ***" });
    } else {
        res.status(202).send({ message: "Error! : *** userNotfound ***" });
    }
})

router.post("/signup", async (req, res) => {
    console.log("IN");
    res.send("DOne");
    // console.log(req.body);
    // const user = new UserInfo({
    //     uemail: req.body.uemail,
    //     uname: req.body.uname,
    //     uphone: req.body.uphone,
    //     upass: req.body.upass,
    // });

    // const data = await user.save();

    // res.status(200).send({
    //   data: data,
    //   message: `Hello, ${data.uname} You Registered Successfully`,
    // });
})

module.exports = router;