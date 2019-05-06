const express = require('express');
const app = express();
const mc = require('./controllers/messages_controller');


const mbu = '/api/messages'
app.use(express.json());
app.post(mbu, mc.create)
app.get(mbu, mc.read)
app.put (`${mbu}/:id`,mc.update)
app.delete(`${mbu}/:id`, mc.delete)
app.use(express.static(__dirname + '/../public/build'));



const port = 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


