const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const fs = require('node:fs');
const path = require('node:path');
const dbPath = path.join(__dirname, 'db.json');

app.get('/users', async (req, res) => {
    const users = JSON.parse(await fs.promises.readFile(dbPath, 'utf-8'));

    if (users) {
        res.json({
            data: users,
        });
    } else res.json({
        message: "Users not found"
    })
})

app.get('/users/:id', async (req, res) => {
    const users = JSON.parse(await fs.promises.readFile(dbPath, 'utf-8'));
    const {id} = req.params;

    const findUser = users.find(user => user.id === +id);

    if (findUser) {
        res.json({
            data: findUser
        });
    } else {
        res.json({
            message: "User not found"
        });
    }
})

app.post('/users', async (req, res) => {
    const users = JSON.parse(await fs.promises.readFile(dbPath, 'utf-8'));
    const {body} = req;

    if (body.name.length > 3 && body.age > 0) {
        users.push(req.body);

        fs.writeFile(dbPath, JSON.stringify(users), (err) => {
            if (err) console.log(err);
        });

        res.status(201).json({
            message: "User created",
        });
    } else {
        res.status(200).json({
            message: `User not created, ${body.name} need > 3 letters, age need > 0`,
        });
    }

})

app.delete('/users/:id', async (req, res) => {
    const users = JSON.parse(await fs.promises.readFile(dbPath, 'utf-8'));
    const {id} = req.params;

    const findIndexUser = users.indexOf(users.find(user => user.id === +id));

    if (+findIndexUser !== -1) {
        users.splice(findIndexUser, 1);

        fs.writeFile(dbPath, JSON.stringify(users), (err) => {
            if (err) console.log(err);
        });

        res.status(200).json({
            message: "User delete",
        });
    } else {
        res.status(200).json({
            message: `User not found`,
        });
    }

})

app.put('/users/:id', async (req, res) => {
    const users = JSON.parse(await fs.promises.readFile(dbPath, 'utf-8'));
    const {id} = req.params;

    const findIndexUser = users.indexOf(users.find(user => user.id === +id));

    if (+findIndexUser !== -1) {
        const {body} = req;

        if (body.name.length > 3 && body.age > 0) {
            users[findIndexUser] = body;

            fs.writeFile(dbPath, JSON.stringify(users), (err) => {
                if (err) console.log(err);
            });

            res.status(201).json({
                message: "User update",
            });
        } else {
            res.status(200).json({
                message: `User not update, ${body.name} need > 3 letters, age need > 0`,
            });
        }
    } else {
        res.status(200).json({
            message: "User not found"
        });
    }

})

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server has successfully started on PORT ${PORT}`);
})