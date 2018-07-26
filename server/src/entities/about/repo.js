
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
    getTestimonial: () => {
      return new Promise((resolve, reject) => {
        const queryString = SqlString.format(
          `SELECT * from TESTIMONIAL`
        );

        db.query(queryString, (err, results) => {
          if (err) return reject(500);
          return resolve(results);
        });
      });
    },
    addTestimonial: (note, name, title, file_path) => {
      return new Promise((resolve, reject) => {
        const values = [note, name, title, file_path];
        const queryString = SqlString.format(
          `CALL add_testimonial(?, ?, ?, ?)`, values
        );

        db.query(queryString, (err, results) => {
          if (err){
            console.log(err)
            return reject(500);
          }
          return resolve(results);
        });
      });
    },
    editTestimonial: (testimonial_id, note, name, title, file_path) => {
      return new Promise((resolve, reject) => {
        const values = [testimonial_id, note, name, title, file_path];
        const queryString = SqlString.format(
          `CALL edit_testimonial(?, ?, ?, ?, ?)`, values
        );

        db.query(queryString, (err, results) => {
          if (err){
            console.log(err)
            return reject(500);
          }
          return resolve(results);
        });
      });
    }
  }

  return repo;
}

module.exports = repoAbout;