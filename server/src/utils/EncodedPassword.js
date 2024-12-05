const bycrypt = require('bcrypt');

const saltRounds = 10;

export const encodedPassword = async (text) => {
    try {
        const hashPass = await bycrypt.hash(text, saltRounds);
        console.log(hashPass);
        return hashPass;
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}

export const compareDecoded = async (text, encodedPassword) => {
    try {
        const result = await bycrypt.compare(text, encodedPassword);
        return result;
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}


