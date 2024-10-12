const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = new express.Router();
const auth = require('../middleware/auth')


router.get('/test', (req, res) => {
    res.send("From a new File");
});

module.exports = router;

router.patch('/users/:id', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        const fields = ['name', 'password', 'age', 'email'];
        fields.forEach((field) => {
            if (req.body[field]) {
                user[field] = req.body[field];
            }
        });

        if (req.body.password) {
            user.password = await bcrypt.hash(user.password, 8);
        }

        await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        if (user.password) {
            user.password = await bcrypt.hash(user.password, 8);
        }

        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
