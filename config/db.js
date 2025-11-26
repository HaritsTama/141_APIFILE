const db = require('../models');

async function connectDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Terkoneksi Bro!');

        await db.sequelize.sync({alter : true});
        console.log('Sinkronisasi Berhasil Bro!');
    } catch (err) {
        console.error('Gagal terkoneksi bro:', err.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;