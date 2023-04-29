const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Dragon is running');
});

app.get('/categories', (req, res) =>{
    res.send(categories);
})

app.get('/news', (req, res) =>{
    res.send(news);
})

app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedNews = news.find(news => news._id === id);
    res.send(selectedNews);
})

app.get('/categories/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news)
    } else {
        const categoriesNews = news.filter(news => parseInt(news.category_id) === id);
        res.send(categoriesNews);
    }
})

app.listen(port, ()=> {
    console.log(`Dragon is running on port: ${port}`)
});