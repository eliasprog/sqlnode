const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },

    async store(req, res) {
        const { name, email } = req.body

        let user = await User.findOne({ where: { name } })

        if(!user) {
            user = await User.create({ name, email })
        }

        return res.json(user)
    }
}
