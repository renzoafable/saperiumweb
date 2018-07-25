
var SqlString = require('sqlstring');

const aboutRepo = function (db) {
    const repo = {
        editAbout: (title, body) => {
            return new Promise((resolve, reject) => {
                const values = [title, body];
                const queryString = SqlString.format(
                    `CALL edit_about(?, ?)`, values
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

module.exports = aboutRepo;