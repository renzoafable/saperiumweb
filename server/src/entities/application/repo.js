
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
        },
        viewQuestions: () => {
            return new Promise((resolve, reject) => {
                const queryString = SqlString.format(
                    `SELECT * from QUESTION`
                );

                db.query(queryString, (err, results) => {
                    if (err) {
                        console.log(err.message);
                        return reject(500)
                    }
                    return resolve(results)
                });
            });
        },
        addAnswer: (body, question_id, application_id) => {
            return new Promise((resolve, reject) => {
                const values = [body, question_id, application_id];
                const queryString = SqlString.format(
                    `CALL add_answer(?, ?, ?)`, values
                );

                db.query(queryString, (err, results) => {
                    if (err) return reject(500)
                    return resolve(results)
                });
            });
        },
        viewAnswersByUser: (application_id) => {
            return new Promise((resolve, reject) => {
                const queryString = SqlString.format(
                    `SELECT QUESTION.body, ANSWER.* from ANSWER LEFT JOIN QUESTION on QUESTION.question_id = ANSWER.question_id  where ANSWER.application_id = ?
                    `, application_id
                );

                db.query(queryString, (err, results) => {
                    if (err) return reject(500)
                    return resolve(results)
                });
            });
        },
        viewApplications: (application_id) => {
            return new Promise((resolve, reject) => {
                const queryString = SqlString.format(
                    `SELECT * from APPLICATION`
                );

                db.query(queryString, (err, results) => {
                    if (err) return reject(500)
                    return resolve(results)
                });
            });
        },
        viewChoices: (questions) => {
            const promises = [];
            questions.forEach(question => {
                promises.push(new Promise((resolve, reject) => {
                    const queryString = SqlString.format(
                        `SELECT * FROM CHOICE WHERE question_id = ?`, question.question_id
                    );
                    
                    db.query(queryString, (err, result) => {
                        if (err) {
                            console.log(err.message);
                            return reject(500);
                        }

                        return resolve(result);
                    });
                }));
            });

            return promises;
        }
    }
    return repo;
}

module.exports = repoApplication;