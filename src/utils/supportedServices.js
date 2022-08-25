const { sendMsgToChanel, sendMsgToGroup, sendMsgToPerson } = require('../functions/telegram');

const supportedServices = [{
    name: "telegram",
    functions: [{
            name: "sendMsgToPerson",
            method: sendMsgToPerson
        },
        {
            name: "sendMsgToChanel",
            method: sendMsgToChanel
        },
        {
            name: "sendMsgToGroup",
            method: sendMsgToGroup
        }
    ]
}]