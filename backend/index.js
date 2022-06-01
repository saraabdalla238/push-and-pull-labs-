const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const messages = [];
app.post('/messages', (req, res)=>{
    let {body} = req;
    messages.push(body);
    console.log(body);
    res.status(204).end();
});

app.get('/messages', (req, res)=>{
    res.json(messages);
});
const subscribers={}; 
app.get('/long-messages', (req, res)=>{
    const ID = Math.ceil(Math.random() * 1000000)
    subscribers[ID] = res;})

app.post('/long-messages', (req, res)=>{
    const { body } = req;
    Object.entries(subscribers).forEach(([ID, response])=>{
        response.json(body)
        delete subscribers[ID]  
    })
    res.status(204).end()
})


app.listen(3000, ()=>{
    console.log('server is running !!!');
})