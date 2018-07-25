
var SqlString = require('sqlstring');

const repoApplication = function (db) {
    const repo = {
        addApplication: (email) => {
            return new Promise((resolve, reject) => {
                const queryString = SqlString.format(
                    `CALL add_application(?)`, email
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

module.exports = repoApplication;