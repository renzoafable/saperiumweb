var SqlString = require("sqlstring");

const homeRepo = function(db) {
  const repo = {
    editHome: (aboutUs, careers, services, contact_us, application) => {
      return new Promise((resolve, reject) => {
        const values = [aboutUs, careers, services, contact_us, application];
        const queryString = SqlString.format(
          `CALL edit_home(?, ?, ?, ?, ?)`,
          values
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
    viewHome: () => {
      return new Promise((resolve, reject) => {
        const queryString = SqlString.format(`SELECT * FROM HOME;`);

        db.query(queryString, (err, results) => {
          if (err) return reject(500);
          return resolve(results[0]);
        });
      });
    },
    getImages: id => {
      return new Promise((resolve, reject) => {
        const queryString = SqlString.format(
          `SELECT * FROM IMAGE where page_id = ?;`,
          id
        );

        db.query(queryString, (err, results) => {
          if (err) {
            console.log(err);
            return reject(500);
          }
          return resolve(results);
        });
      });
    }
  };
  return repo;
};

module.exports = homeRepo;
