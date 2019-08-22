var db = require('../models/mysql');

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
});