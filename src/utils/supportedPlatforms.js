const { sendMsg } = require('../functions/telegram');

const supportedServices = {
    telegram: {
        methods: [{
            name: "sendMsg",
            method: (args) => sendMsg(args)
        }]
    }
}

module.exports = supportedServices;