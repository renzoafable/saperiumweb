
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
        },
        getCareers: () => {
            console.log('entered repo');
            return new Promise((resolve, reject) => {
                const queryString = SqlString.format(
                    `SELECT title, body FROM careers`
                );

                db.query(queryString, (err, results) => {
                    if (err) return reject(500);
                    console.log(results);
                    return resolve(results);
                });                
            })
        }
    };
    return repo;
}

module.exports = repoCareers;