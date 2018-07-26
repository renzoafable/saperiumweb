const servicesController = (repo) =>{
    const controller = {
        editServices : (req, res, next) => {
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

            repo.editServices(title, body)
            .then(
                result => {
                    res.status(200);
                    return res.json({
                        status: 200, message: 'Successfully edit services page!'
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
        },

        getServices : (req, res, next) => {

            repo.getServices()
            .then(
                result => {
                    res.status(200);
                    return res.json({
                        status: 200, result, message: 'Successfully retrieved!'
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

module.exports = servicesController;