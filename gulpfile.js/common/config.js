const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const env = fs.readFileSync(path.resolve('.env'));
const buffer = Buffer.from(env);
const config = dotenv.parse(buffer);

module.exports = {
    config
};
