module.exports = {
    login: (req, res) => {

    },
    register: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db'); // always do this to get your db.
        let foundUser = await db.check_username(username);
        foundUser = foundUser[0];
        if(foundUser){
            res.status(409).send('username already exists')
        }
    },
    logout: (req, res) => {

    },
    getUser: (req, res) => {

    },
}