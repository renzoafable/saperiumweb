
var SqlString = require('sqlstring');

const repoCareers = function (db) {
    const repo = {
        editCareers: (title, body) => {
            return new Promise((resolve, reject) => {
                const values = [title, body];
                const queryString = SqlString.format(
                    `CALL edit_careers(?, ?)`, values
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

module.exports = repoCareers;