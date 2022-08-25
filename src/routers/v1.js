const router = require('express')();
const supportedServices = require('../utils/supportedServices');


router.post('/send', async(req, res) => {
    const service = await req.params.service.toLowerCase();
    const method = await req.params.method.toLowerCase();

    if (!service)
        return res.status(405).json({ err: "no service has been given" });

    if (!method)
        return res.status(405).json({ err: "no method has been given" });

    const selectedMethod = await (supportedServices[service].functions).find((method) => method == req.body.method)
    const response = await selectedMethod(req.body.args);
    res.status(200).json(response);
})

module.exports = router;