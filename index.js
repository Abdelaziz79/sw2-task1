// const express = require('express');
import express from "express";
import { engine } from 'express-handlebars';


const students = [
    {
        id: 1,
        name: "ahmed",
        city: "shebeen"
    },
    {
        id: 2,
        name: "ali",
        city: "tanta"
    },
    {
        id: 3,
        name: "fat7e",
        city: "menia"
    },
    {
        id: 4,
        name: "mesh fat7i",
        city: "aswan"
    }
];


const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');


const fun = (req, res) => {
    res.render('students', { layout: false, students })
};

app.get('/students', fun);

// app.get('/users', (req, res) => {
//     res.send("<h1>Users</h1>");
// });

// app.get('/students/:id', (req, res) => {
//     const id = req.params.id;
//     const data = students.find((item) => {
//         return item.id == id;
//     })
//     res.send("<h1>" + data.id + " " + data.name + " " + data.city + "</h1>");
// });

app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const data = students.find((item) => {
        return item.id == id;
    })
    res.render('student', { layout: false, student: data });
});

app.listen(5000);
