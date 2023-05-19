const { connection } = require('../client/postgresql');

const getProducts = async() => {
    return await connection.query('SELECT * FROM products');
};

const insertProduct = async(productName) => {
    // Add your solution here!
};

module.exports = {
    getProducts,
    insertProduct
};
