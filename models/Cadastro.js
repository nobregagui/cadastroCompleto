module.exports = (sequelize, DataTypes) => {
    const Cadastro = sequelize.define('Cadastro', {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        senha: DataTypes.STRING,
        cep: {
            type:DataTypes.STRING,
            allowNull: true
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: true
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: true
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: true
        },
        },
        {
            tableName: 'cadastro',
            timestamps:false
        }

        
    )
    return Cadastro
}