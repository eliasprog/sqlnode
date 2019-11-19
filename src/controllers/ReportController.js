const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    /**
     * Find all users who has email like:
     * @rocketseat.com
     */
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@gmail.com',
                }
            },

            include: [
                {
                    association: 'addresses',
                    where: { 
                        street: 'Rua 26 de Maio'
                    } 
                }, // Addresses
                
                {
                    association: 'techs',
                    required: false,
                    where: { 
                        name: {
                            [Op.like]: 'React%'
                        }
                    }    
                }  // Techs
            ]
        })

        return res.json(users)
    }
}
