const db = require('./db');
const pagination = require('./paginationHelper');
const config = require('../config');

async function getMultiple(page=1){
    const offset = pagination.getOffset(page,config.itemsPerPage);
    const rows = await db.query(
        `SELECT * FROM product LIMIT ${offset},${config.itemsPerPage}`
    );
    const data = pagination.emptyOrRows(rows);
    const meta = {page};
    
    return {
        data,
        meta
    }
}

module.exports = {
    getMultiple
}