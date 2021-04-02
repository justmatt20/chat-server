let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({text, time, id});
        id++
        res.status(200).send(messages);
    },

    read: (req, res) => {
    res.status(200).send(messages);
    },

    update: (req, res) => {
        const { text } = req.body;
        const updated = req.params.id;
        const newMessages = messages.findIndex(message => message.id == updated);
        let message = messages[newMessages];

        messages[newMessages] = {
            id: message.id,
            text: text || message.text,
            text: message.time
        };

        res.status(200).send(messages);
    },

    delete: (req, res) => {
        const deleted = req.params.id;
        newMessages = messages.findIndex(messages => messages.id == deleted);
        messages.splice(newMessages, 1);
        res.status(200).send(messages);
    }
}