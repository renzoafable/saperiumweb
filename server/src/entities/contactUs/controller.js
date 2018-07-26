const contactUsController = (repo) =>{
    const controller = {
        editHome : (req, res, next) => {
            const title = req.body.titless;
            const address = req.body.address;
            const body = req.body.body;

            if (!title){
                res.status(400);
                return res.json({
                    status: 1006, message: 'Title cannot be empty!'
                });
            }
            if (!address){
                res.status(400);
                return res.json({
                    status: 1008, message: 'Address cannot be empty!'
                });
            }
            if (!body){
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

module.exports = contactUsController;