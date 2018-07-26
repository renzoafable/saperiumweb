const applicationController = repo => {
  const controller = {
    addApplication: (req, res, next) => {
      const email = req.body.email;

      if (!email) {
        res.status(400);
        return res.json({
          status: 1009,
          message: "Email cannot be empty!"
        });
      }

      repo
        .addApplication(email)
        .then(result => {
          res.status(200);
          return res.json({
            status: 200,
            message: "Successfully added an application!",
            data: result[0][0]
          });
        })
        .catch(err => {
          res.status(err);
          return res.json({
            status: err,
            message: "Internal server error!"
          });
        });
    },
    viewQuestions: (req, res, next) => {
      let questions;
      let multipleChoice = [];

      repo
        .viewQuestions()
        .then(result => {
          questions = result;
          questions.forEach(question => {
            if (question.type === "multiple") {
              multipleChoice.push(question);
            }
          });

          return Promise.all(repo.viewChoices(multipleChoice));
        })
        .then(result => {
          result.forEach((choice, i) => {
            multipleChoice[i].choices = choice;
            questions = questions.map((question) => question.question_id === multipleChoice[i].question_id ? multipleChoice[i] : question);
          });

          res.status(200);
          res.json({
            status: 200,
            message: 'Successfully get all questions',
            data: questions
          });
        })
        .catch(err => {
          res.status(err);
          return res.json({
            status: err,
            message: "Internal server error!"
          });
        });
    },
    addAnswer: (req, res, next) => {
      const body = req.body.body;
      const question_id = req.body.question_id;
      const application_id = req.body.application_id;

      if (!body) {
        res.status(400);
        return res.json({
          status: 1007,
          message: "Body cannot be empty!"
        });
      }
      if (!question_id) {
        res.status(400);
        return res.json({
          status: 1010,
          message: "Question Id cannot be empty!"
        });
      }
      if (!application_id) {
        res.status(400);
        return res.json({
          status: 1011,
          message: "Application Id cannot be empty!"
        });
      }

      repo
        .addAnswer(body, question_id, application_id)
        .then(result => {
          res.status(200);
          return res.json({
            status: 200,
            message: "Successfully add answer!"
          });
        })
        .catch(err => {
          res.status(err);
          return res.json({
            status: err,
            message: "Internal server error!"
          });
        });
    },
    viewAnswersByUser: (req, res, next) => {
      const application_id = req.params.application_id;

      if (!application_id) {
        res.status(400);
        return res.json({
          status: 1011,
          message: "Application Id cannot be empty!"
        });
      }

      repo
        .viewAnswersByUser(application_id)
        .then(result => {
          res.status(200);
          return res.json({
            status: 200,
            message: "Successfully viewed answers by users!",
            data: result
          });
        })
        .catch(err => {
          res.status(err);
          return res.json({
            status: err,
            message: "Internal server error!"
          });
        });
    },
    viewApplications: (req, res, next) => {
      repo
        .viewApplications()
        .then(result => {
          res.status(200);
          return res.json({
            status: 200,
            message: "Successfully viewed all applications",
            data: result
          });
        })
        .catch(err => {
          res.status(err);
          return res.json({
            status: err,
            message: "Internal server error!"
          });
        });
    },
    viewAll: (req, res, next) => {
      let questions;
      let choices;

      repo
        .viewQuestions()
        .then(result => {
          questions = result;
          questions.forEach(question => {
            if (question.type === "multiple") {
              multipleChoice.push(question);
            }
          });

          return Promise.all(repo.viewChoices(multipleChoice));
        })
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          res.status(err);
          return res.json({
            status: err,
            message: "Internal server error!"
          });
        });
    }
  };

  return controller;
};

module.exports = applicationController;
