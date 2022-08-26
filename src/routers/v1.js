const router = require('express')();
const supportedPlatforms = require('../utils/supportedPlatforms');


router.post('/send', async (req, res) => {
    const args = await req.body;
    const platform = await args.platform.toLowerCase();
    const method = await args.method.toLowerCase();

    if (!platform)
        return res.status(405).json({ err: "no platform has been given" });

    if (!method)
        return res.status(405).json({ err: "no method has been given" });

    const response = await supportedPlatforms[platform].methods.find(method => method.name === req.query.method).method(args);
    res.status(200).json(response);
})

module.exports = router;