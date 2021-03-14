const db = require("../models");
const { Role, User, Permission } = db;
const Op = db.Sequelize.Op;

let UserController = {}

UserController.create = async (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) {
        return res.status(404).json({
            message: "Require email & password"
        })
    }
    try {
        let data = await User.create({ email, password })
        res.json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

UserController.findById = async (req, res) => {
    let { id } = req.params

    try {
        let data = await User.findByPk(id)
        res.json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

UserController.find = async (req, res) => {
    let { q } = req.query
    let search = {
    }
    if (q) {
        search.where = {
            email: {
                [Op.like]: `%${q}%`
            }
        }
    }

    search.include = [
        {
            model: User,
            as: 'users'
        },
        
        {
            model: Permission,
            as: 'permissions'
        },

    ]

    try {
        let data = await Role.findAll(search)
        res.json(data);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

UserController.update = async (req, res) => {
    let { id } = req.params

    try {
        let num = await User.update(req.body, {
            where: { id }
        })

        if (num == 1) {
            res.json({
                success: true,
                message: 'User was updated successfully.'
            })
        } else {
            res.json({
                success: false,
                message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
            })

        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}
UserController.destroy = async (req, res) => {
    let { id } = req.params

    try {
        let num = await User.destroy({
            where: { id }
        })
        if (num == 1) {
            res.json({
                success: true,
                message: 'User was deleted successfully!'
            })
        } else {
            res.json({
                success: false,
                message: `Cannot delete User with id=${id}. Maybe User was not found!`
            })

        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}




module.exports = UserController