
var SqlString = require('sqlstring');

const repoHome = function (db) {
    const repo = {
        editHome: (aboutUs, careers, services, contact_us, application) => {
            return new Promise((resolve, reject) => {
                const values = [aboutUs, careers, services, contact_us, application];
                const queryString = SqlString.format(
                    `CALL edit_home(?, ?, ?, ?, ?)`, values
                );

                db.query(queryString, (err, results) => {
                    if (err) return reject(500)
                    return resolve(results)
                });
            });
        }
    }
    return repo;
}

module.exports = repoHome;