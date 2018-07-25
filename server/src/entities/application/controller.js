const applicationController = (repo) =>{
    const controller = {
        addApplication : (req, res, next) => {
            const email = req.body.email;

            if (!email){
                res.status(400);
                return res.json({
                    status: 1009, message: 'Email cannot be empty!'
                });
            }

            repo.addApplication(email)
            .then(
                result => {
                    res.status(200);
                    return res.json({
                        status: 200, message: 'Successfully added an application!'
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
        viewQuestions : (req, res, next) => {
            repo.viewQuestions(email)
            .then(
                result => {
                    res.status(200);
                    return res.json({
                        status: 200, message: 'Successfully viewed all questions!', data: result
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
        addAnswer : (req, res, next) => {
            const body = req.body.body;
            const question_id = req.body.question_id;
            const application_id = req.body.application_id;

            if (!body){
                res.status(400);
                return res.json({
                    status: 1007, message: 'Body cannot be empty!'
                });
            }
            if (!question_id){
                res.status(400);
                return res.json({
                    status: 1010, message: 'Question Id cannot be empty!'
                });
            }
            if (!application_id){
                res.status(400);
                return res.json({
                    status: 1011, message: 'Application Id cannot be empty!'
                });
            }

            repo.addAnswer(body, question_id, application_id)
            .then(
                result => {
                    res.status(200);
                    return res.json({
                        status: 200, message: 'Successfully add answer!'
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
        }
    };

    return controller;
}

module.exports = applicationController;