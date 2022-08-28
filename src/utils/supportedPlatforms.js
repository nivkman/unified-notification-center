const { sendTelegramMsg } = require('../functions/telegram');
const { sendEmailMsg } = require('../functions/email');

const supportedServices = {
    telegram: {
        methods: [{
            name: "sendMsg",
            method: (args) => sendTelegramMsg(args)
        }]
    },
    email: {
        methods: [{
            name: "sendMsg",
            method: (args) => sendEmailMsg(args)
        }]
    }
}

module.exports = supportedServices;