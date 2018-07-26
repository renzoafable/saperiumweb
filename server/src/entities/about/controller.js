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
        },
        viewAbout : (req, res, next) => {
            let data;

            repo.viewAbout()
            .then(
                result => {
                    data = result;
                    return repo.getTestimonial();
                }
            ).then(
                result => {
                    data.testimonial = result;
                    res.status(200);
                    return res.json({
                        status: 200, message: 'Successfully viewed about page!', data
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
        addTestimonial : (req, res, next) => {
            const note = req.body.note;
            const name = req.body.name;
            const title = req.body.title;
            const file_path = req.body.file_path;

            if (!note){
                res.status(400);
                return res.json({
                    status: 1015, message: 'Note cannot be empty!'
                });
            }
            if (!name){
                res.status(400);
                return res.json({
                    status: 1016, message: 'Name cannot be empty!'
                });
            }
            if (!title){
                res.status(400);
                return res.json({
                    status: 1006, message: 'Title cannot be empty!'
                });
            }
            if (!file_path){
                res.status(400);
                return res.json({
                    status: 1018, message: 'File Path cannot be empty!'
                });
            }

            repo.addTestimonial(note, name, title, file_path)
            .then(
                result => {
                    return res.status(200).json({
                        status: 200, message: 'Successfully added testimonial!'
                    });
                }
            ).catch(
                err => {
                    return res.status(err).json({
                        status: 500, message: 'Internal server error!'
                    });
                }
            )              
        },
        editTestimonial : (req, res, next) => {
            const testimonial_id = req.body.testimonial_id;
            const note = req.body.note;
            const name = req.body.name;
            const title = req.body.title;
            const file_path = req.body.file_path;

            if (!testimonial_id){
                res.status(400);
                return res.json({
                    status: 1017, message: 'Testimonial Id cannot be empty!'
                });
            }
            if (!note){
                res.status(400);
                return res.json({
                    status: 1015, message: 'Note cannot be empty!'
                });
            }
            if (!name){
                res.status(400);
                return res.json({
                    status: 1016, message: 'Name cannot be empty!'
                });
            }
            if (!title){
                res.status(400);
                return res.json({
                    status: 1006, message: 'Title cannot be empty!'
                });
            }
            if (!file_path){
                res.status(400);
                return res.json({
                    status: 1018, message: 'File Path cannot be empty!'
                });
            }

            repo.editTestimonial(testimonial_id, note, name, title, file_path)
            .then(
                result => {
                    return res.status(200).json({
                        status: 200, message: 'Successfully edited testimonial!'
                    });
                }
            ).catch(
                err => {
                    return res.status(err).json({
                        status: 500, message: 'Internal server error!'
                    });
                }
            )              
        }
    };

    return controller;
}

module.exports = aboutController;