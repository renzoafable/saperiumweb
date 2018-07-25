
var SqlString = require('sqlstring');

const repoContactUs = function (db) {
  const repo = {
    editContactUs: (title, address, body) => {
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
    },
    getContactUs: () => {
      return new Promise((resolve, reject) => {
        const queryString = SqlString.format(
          `SELECT * FROM CONTACT_US`
        );

        db.query(queryString, (err, result) => {
          if (err) {
            console.log(err.message);
            return reject(500);
          }

          return resolve(result);
        });
      });
    },
    getPhoneNums: () => {
      return new Promise((resolve, reject) => {
        const queryString = SqlString.format(
          `SELECT * FROM PHONE`
        );

        db.query(queryString, (err, result) => {
          if (err) {
            console.log(err.message);
            return reject(500);
          }

          return resolve(result);
        });
      });
    },
    addPhoneNums: (givenNumber) => {
      return new Promise((resolve, reject) => {
        const queryString = SqlString.format(
          `CALL add_phone(?)`, givenNumber
        );
        
        db.query(queryString, (err, result) => {
          if (err) {
            console.log(err.message);
            return reject(500);
          }

          return resolve();
        });
      });
    },
    addMessage: (email, first_name, last_name, body) => {
      return new Promise((resolve, reject) => {
        const values = [email, first_name, last_name, body];
        const queryString = SqlString.format(
          `CALL add_message(?, ?, ?, ?)`, values
        );
        
        db.query(queryString, (err, result) => {
          if (err) {
            console.log(err.message);
            return reject(500);
          }

          return resolve();
        });
      });
    }
  }
  return repo;
}

module.exports = repoContactUs;