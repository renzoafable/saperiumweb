
var SqlString = require('sqlstring');

const repoContactUs = function (db) {
    const repo = {
        editCareers: (title, address,  body) => {
            return new Promise((resolve, reject) => {
                const values = [title, address, body];
                const queryString = SqlString.format(
                    `CALL edit_contact_us(?, ?, ?)`, values
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

module.exports = repoContactUs;