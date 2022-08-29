const { sendTelegramMsg } = require('../functions/telegram');
const { sendEmailMsg } = require('../functions/email');
const { sendSlackMsg } = require('../functions/slack');

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
    },
    slack: {
        methods: [{
            name: "sendMsg",
            method: (args) => sendSlackMsg(args)
        }]
    }
}

module.exports = supportedServices;