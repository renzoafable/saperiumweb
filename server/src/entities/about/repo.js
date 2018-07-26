
var SqlString = require('sqlstring');

const repoAbout = function (db) {
  const repo = {
    editAbout: (title, body) => {
      return new Promise((resolve, reject) => {
        const values = [title, body];
        const queryString = SqlString.format(
          `CALL edit_about(?, ?)`, values
        );

        db.query(queryString, (err, results) => {
          if (err) return reject(500);
          return resolve(results);
        });
      });
    },
    viewAbout: () => {
      return new Promise((resolve, reject) => {
        console.log("gone")
        const queryString = SqlString.format(
          `SELECT * FROM ABOUT;`
        );

        db.query(queryString, (err, results) => {
          if (err) return reject(500);
          return resolve(results[0]);
        });
      });
    },
    getImages: (id) => {
      return new Promise((resolve, reject) => {
        const queryString = SqlString.format(
          `SELECT * FROM IMAGE where page_id = ?`, id
        );

        db.query(queryString, (err, results) => {
          if (err) {
            console.log(err);
            return reject(500);
          }
          return resolve(results);
        });
      });
    },
    getTestimonials: () => {}
  }

  return repo;
}

module.exports = repoAbout;