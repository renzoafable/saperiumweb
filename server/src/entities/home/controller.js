const homeController = (repo) =>{
    const controller = {
        editHome : (req, res, next) => {
            const aboutUs = req.body.aboutUs;
            const careers = req.body.careers;
            const services = req.body.services;
            const contact_us = req.body.contact_us;

            if (!aboutUs){
                res.status(400);
                return res.json({
                    status: 1001, message: 'About Us cannot be empty!'
                });
            }
            if (!careers){
                res.status(400);
                return res.json({
                    status: 1002, message: 'Careers cannot be empty!'
                });
            }
            if (!services){
                res.status(400);
                return res.json({
                    status: 1003, message: 'Services cannot be empty!'
                });
            }
            if (!contact_us){
                res.status(400);
                return res.json({
                    status: 1004, message: 'Contact Us cannot be empty!'
                });
            }

            repo.editHome(aboutUs, careers, services, contact_us)
            .then(
                result => {
                    res.status(200);
                    return res.json({
                        status: 200, message: 'Successfully edit home page!'
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
        viewHome : (req, res, next) => {
            let data = {};
            let images;

            repo.viewHome()
            .then(
                result => {
                    const { id } = result;
                    delete result.id;
                    data.id = id;
                    data.pages = result;
                    return repo.getImages(data.id);
                }
            ).then(
                result => {
                    images = result;
                    data.images = images;
                    res.status(200);
                    return res.json({
                        status: 200, message: 'Successfully viewed home page!', data
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

module.exports = homeController;