const Sequelize = require('sequelize');
const sequelize = new Sequelize('webNodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate()
    .then(() => {
        console.log('Kết nối thành công!');
    })
    .catch(err => {
        console.error('Không thể kết nối tới database:', err);
    });
module.exports = sequelize;