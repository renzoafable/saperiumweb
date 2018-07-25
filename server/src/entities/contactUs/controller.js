const contactUsController = (repo) => {
  const controller = {
    editContactUs: (req, res, next) => {
      const title = req.body.title;
      const address = req.body.address;
      const body = req.body.body;

      if (!title) {
        res.status(400);
        return res.json({
          status: 1006, message: 'Title cannot be empty!'
        });
      }
      if (!address) {
        res.status(400);
        return res.json({
          status: 1013, message: 'Address cannot be empty!'
        });
      }
      if (!body) {
        res.status(400);
        return res.json({
          status: 1007, message: 'Body cannot be empty!'
        });
      }

      repo.editContactUs(title, address, body)
        .then(
          result => {
            res.status(200);
            return res.json({
              status: 200, message: 'Successfully edit contact us page!'
            });
          }
        ).catch(
          err => {
            res.status(err);
            return res.json({
              status: err, message: 'Internal server error!'
            });
          }
        )
    },
    getContactUs: (req, res, next) => {
      repo.getContactUs()
        .then(result => {
          res.status(200);
          res.json({
            status: 200,
            message: 'Succesfully fetched data',
            data: result
          });
        })
        .catch(err => {
          let message = '';

          switch (err) {
            case 500:
              message = 'Internal server error while fetching data';
              break;
            default:
              break;
          }

          res.status(err);
          res.json({ status: err, message });
        });
    },
    getPhoneNums: (req, res, next) => {
      repo.getPhoneNums()
        .then(result => {
          res.status(200);
          res.json({
            status: 200,
            message: 'Succesfully fetched data',
            data: result
          });
        })
        .catch(err => {
          let message = '';

          switch(err) {
            case 500:
              message = 'Internal server error while fetching data';
              break;
            default:
              break;
          }

          res.status(err);
          res.json({ status: err, message });
        });
    },
    addPhoneNums: (req, res, next) => {
      const { givenNumber } = req.body;
      if (!givenNumber){
        res.status(400);
        return res.json({
            status: 1012, message: 'Number cannot be empty!'
        });
      }

      repo.addPhoneNums(givenNumber)
        .then(() => {
          res.status(200);
          res.json({
            status: 200,
            message: 'Successfully added phone number',
            data: givenNumber
          });
        })
        .catch(err => {
          let message = '';

          switch (err) {
            case 500:
              message = 'Internal server error while adding phone number';
              break;
            default:
              break;
          }

          res.status(err);
          res.json({ status: err, message });
        });
    },
    addMessage: (req, res, next) => {
      const { email, first_name, last_name, body } = req.body;

      if (!email) {
        res.status(400);
        return res.json({
          status: 1014, message: 'Email cannot be empty!'
        });
      }
      if (!first_name) {
        res.status(400);
        return res.json({
          status: 1015, message: 'First Name cannot be empty!'
        });
      }
      if (!last_name) {
        res.status(400);
        return res.json({
          status: 1017, message: 'Last Name cannot be empty!'
        });
      }
      if (!body) {
        res.status(400);
        return res.json({
          status: 1016, message: 'Body cannot be empty!'
        });
      }

      repo.addMessage(email, first_name, last_name, body)
        .then(() => {
          res.status(200);
          res.json({
            status: 200,
            message: 'Successfully added message'
          });
        })
        .catch(err => {
          let message = '';

          switch (err) {
            case 500:
              message = 'Internal server error while adding phone number';
              break;
            default:
              break;
          }

          res.status(err);
          res.json({ status: err, message });
        });
    }
  };

  return controller;
}

module.exports = contactUsController;