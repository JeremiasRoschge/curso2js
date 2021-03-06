const bcrypt = require("bcryptjs");

const helpers = {};

helpers.encrypPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;

};

helpers.login = async (password, savedPassword) => {
    try {
    await bcrypt.compare(password, savedPassword);
    } catch(e) {
        console.log(e);
    }

};

module.exports = helpers;