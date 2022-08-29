const axios = require('axios').default;

const sendSlackMsg = async (args) => {
    try {
        await axios.post(args.send_url,{text: args.notification}, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return { status: 'success' };
    } catch (err) {
        return { status: 'failed', err };
    }
}

module.exports = { sendSlackMsg }