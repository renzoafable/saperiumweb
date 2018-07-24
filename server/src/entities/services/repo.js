
var SqlString = require('sqlstring');

const repoServices = function (db) {
    const repo = {
        editServices: (title, body) => {
            return new Promise((resolve, reject) => {
                const values = [title, body];
                const queryString = SqlString.format(
                    `CALL edit_services(?, ?)`, values
                );

                db.query(queryString, (err, results) => {
                    if (err) return reject(500)
                    return resolve(results)
                });
            });
        }
    };
    return repo;
}

module.exports = repoServices;