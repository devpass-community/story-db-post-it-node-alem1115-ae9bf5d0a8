const { connection } = require('../client/postgresql');

const getProducts = async () => {
    return await connection.query('SELECT * FROM products');
};

const insertProduct = async (productName) => {
    let sql = "INSERT INTO products (name) VALUES ($1) RETURNING id";
    let values = [productName];
    let result = await connection.query(sql, values);
};

module.exports = {
    getProducts,
    insertProduct
};
