const aboutController = (repo) =>{
    const controller = {
        editAbout : (req, res, next) => {
            const title = req.body.title;
            const body = req.body.body;

            if (!title){
                res.status(400);
                return res.json({
                    status: 1006, message: 'Title cannot be empty!'
                });
            }
            if (!body){
                res.status(400);
                return res.json({
                    status: 1007, message: 'Body cannot be empty!'
                });
            }

            repo.editAbout(title, body)
            .then(
                result => {
                    res.status(200);
                    return res.json({
                        status: 200, message: 'Successfully edit about us page!'
                    });
                }
            ).catch(
                err => {
                    res.status(500);
                    return res.json({
                        status: 500, message: 'Internal server error!'
                    });
                }
            )
        }
    };

    return controller;
}

module.exports = aboutController;