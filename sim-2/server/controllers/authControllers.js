module.exports = {

    login: (req, res, next) => {
        const { session } = req;
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.registerUser([username, password])
        .then(() => res.status(200).send(session.user))
        .catch((err) => res.status(500).send('Error: Unauthorized'))
    },


    register: (req, res, next) => {
        const { session } = req;
        const db = req.app.get('db');
        const { username, password } = req.body

        db.registerUser([username, password])
            .then(() => res.status(200).send(session.user))
            .catch((err) => res.status(500).send('Error: Unauthorized'))

    },

    logout: (req, res, next) => {
        const {session} = req;
        session.destroy();
        res.status(200).send( session )

    },
}