const express = require('express');
const server = express();
const db = require('./models');
const {User} = require('./models');
const {Op} = require("sequelize");


require('dotenv').config();

server.get('/user/list', async (req, res) => {
    const email = req.query.email;

    console.log(new Date().toString() + ": email = " + email);
    const where = {
        where: {
            email: email
        }
    };
    try {
        const user = await User.findOne(where);
        if (user != null) {
            await user.update({accessedAt: db.sequelize.fn('NOW')});
        }
        user ? res.status(200).send(user) : res.status(401).send({message: 'Unauthorized'});
    } catch (e) {
        res.status(500).send(JSON.stringify({Error: e}));
    }
});

server.get('/user/create', async (req, res) => {

    const name = req.query.name;
    const surname = req.query.surname;
    const email = req.query.email;

    const user = {
        name: name,
        surname: surname,
        email: email
    }

    const userSaved = await User.create(user).catch((err) => {
        res.status(500).send(JSON.stringify({Error: err}));
    });

    console.log(userSaved)

    res.status(201).send(JSON.stringify(userSaved));
});

server.listen(3000, () => console.log('User Service Listening on PORT 3000'));

//db.sequelize.sync({alter: true}).then((req) => {
//    server.listen(3000, () => console.log('User Service Listening on PORT 3000'));
//});
