module.exports = {

    createProperty: (req, res, next) => {
        const { session } = req;
        const db = req.app.get('db');
        const { prop_name, prop_description, address, city, state, zip, image_url, loan_amt, monthly_mortgage, desired_rent, user_id } = req.body

        db.newProperty([prop_name, prop_description, address, city, state, zip, image_url, loan_amt, monthly_mortgage, desired_rent, user_id])
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    },

    getUserProps: (req, res, next) => {
        const { session } = req;
        const db = req.app.get('db');
        const { params } = req;


        db.getUserProps([params.id])
            .then((properties) => res.status(200).send(properties))
            .catch((err) => res.status(500).send(err))

    },

    deleteUserProp: (req, res, next) => {
        const { session } = req;
        const db = req.app.get('db');
        var { params } = req;

        db.delete_product([params.user_id, params.id])
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    }
}