const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('dotenv').config();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1', require('./routers/v1.js'));

app.get('/:id', (req, res) => res.redirect(`/api/v1/${req.params.id}`));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`(UNC) running at PORT: ${PORT}`);
})