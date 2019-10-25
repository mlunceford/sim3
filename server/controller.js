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
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register({username, password: hash});
        newUser = newUser[0]
        // don know if i need to do more than this looking at fullstackmatt authcontroller
    },
    logout: (req, res) => {

    },
    getUser: (req, res) => {

    },
}