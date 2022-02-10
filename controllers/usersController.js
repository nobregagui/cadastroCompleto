const { Cadastro, sequelize } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const UserController = {
    index: async (req, res) => {
        let {page=1} = req.query
        let {count:total, rows:users} = await Cadastro.findAndCountAll({
            limit:5,
            offset: (page - 1) * 5
        })
        let totalPagina = Math.round(total/5)
        return res.render('users', {users, totalPagina})
    },
    cadastro: (req, res) => {
        return res.render('cadastro')
    },
    store: async (req, res) => {
        const {nome, email, senha, cep, estado, endereco, bairro, numero, cidade} = req.body
        const resultado = await Cadastro.create({
            nome,
            email, 
            cep,
            estado,
            endereco,
            bairro,
            numero,
            cidade
        })
        console.log(resultado)
        return res.redirect('/users')
    },edit: async (req, res) => {
        const {id} = req.params

        const cadastro = await Cadastro.findByPk(id)
        return res.render('editarUsuario', {cadastro})
    },
    update: async (req, res) => {
        const {id} = req.params
        const {nome, email, cep, estado, endereco, bairro, numero, cidade} = req.body

        const resultado = await Cadastro.update({
            nome, email, cep, estado, endereco, bairro, numero, cidade
        },
        {
            where: {
                id_usuario: id
            }
        })
        
        console.log(resultado)

        return res.redirect('/users')
    },
    findById: async (req, res) => {
        let {id} = req.params

        let user = await Cadastro.findOne({
            where:{
                id_usuario:id
            }
        })
        return res.render('viewsUsers', {user})
    }, 
    search: async (req, res) => {
        let {key} = req.query 

        let users = await Cadastro.findAll({
            where: {
                nome:{
                    [Op.like]: `${key}%`
                }
            },
            order: [
                ['id_usuario']
            ]
        })
        
        return res.render('users', {users})
    }    
}

module.exports = UserController