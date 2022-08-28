const { Telegraf } = require('telegraf');

const telegramConfiguration = async (token) => {
    const bot = new Telegraf(token);
    return bot;
}

const sendTelegramMsg = async (args) => {
    try {
        const bot = await telegramConfiguration(args.token);
        await bot.telegram.sendMessage(`-100${args.chat_id}`, args.notification);
        return { status: 'success' };

    }catch (err) {
        return { status: 'failed', err };
    }
}

module.exports = { sendTelegramMsg };