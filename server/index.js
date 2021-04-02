const express = require('express');
const controllers = require('./controllers/messages_controllers')

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const apiMessages = "/api/messages";
app.post(apiMessages, controllers.create)
app.get(apiMessages, controllers.read)
app.put(`${apiMessages}/:id`, controllers.update)
app.delete(`${apiMessages}/:id`, controllers.delete);

app.listen(PORT, () => {console.log(`listening on ${PORT}`)})