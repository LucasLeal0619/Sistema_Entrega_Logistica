const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // futuramente:
      // Usuario.hasMany(models.Entrega, { foreignKey: 'usuario_id' });
    }

    // método auxiliar para login
    async verificarSenha(senha) {
      return bcrypt.compare(senha, this.senha);
    }
  }

  Usuario.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM('ADMIN', 'MOTORISTA'),
        allowNull: false,
        defaultValue: 'MOTORISTA'
      }
    },
    {
      sequelize,
      modelName: 'Usuario',
      tableName: 'usuarios'
    }
  );

  // hash da senha antes de criar
  Usuario.beforeCreate(async (usuario) => {
    usuario.senha = await bcrypt.hash(usuario.senha, 10);
  });

  return Usuario;
};