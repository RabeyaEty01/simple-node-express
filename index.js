const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// const handler=(req,res)=>{
//     res.send('Hello');
// }

// app.get('/', handler);


app.get('/', (req, res) => {
    res.send('Hello From Rabeya Aktar Ety, Excited to learn node');
});

const users = [
    { id: 0, name: "Shabana", email: "shabana@gmail.com", phone: '018683495' },
    { id: 1, name: "Apu", email: "apu@gmail.com", phone: '018683495' },
    { id: 2, name: "Shabnur", email: "shabana@gmail.com", phone: '018683495' },
    { id: 3, name: "Bobita", email: "bobita@gmail.com", phone: '018683495' },
    { id: 4, name: "Purnima", email: "purnima@gmail.com", phone: '018683495' },
    { id: 5, name: "Moumita", email: "moumita@gmail.com", phone: '018683495' },
    { id: 6, name: "Rina", email: "rina@gmail.com", phone: '018683495' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user =>
            user.name.toLowerCase().includes(search));

            res.send(searchResult);

    }
    else {
        res.send(users);
    }

});

//app.METHOD
app.post('/users', (req,res)=>{
    const newUser = req.body;
    newUser.id=users.length;
users.push(newUser);

    console.log('hitted post', req.body);
    res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const index = req.params.id;
    const user = users[index];
    res.send(user);
});


const students = [
    { id: 0, name: "Rahim", class: 12, section: "Tulip" },
    { id: 1, name: "Rahman", class: 9, section: "Bokul" },
    { id: 2, name: "Akash", class: 12, section: "Tulip" },
    { id: 3, name: "Rabbi", class: 12, section: "Tulip" },
    { id: 4, name: "Karim", class: 12, section: "Tulip" },
]

app.get('/students', (req, res) => {
    res.send(students);
});

app.get('/students/:id', (req, res) => {
    const arr1 = req.params.id;
    const student = students[arr1];
    res.send(student);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'fazli', 'banana', 'apple']);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Fruits Fazli Mango')
});


app.listen(port, () => {
    console.log('Listening to port', port);
});
