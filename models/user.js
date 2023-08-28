// TODO: Crear modelo de datos de usuario
const { DataTypes, sequelize } = require("../database/db");

const user = sequelize.define(
  "Reserva",
  {
    // Model attributes are defined here

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notNull: {
              msg: "El campo no puede ser nulo"
          },
          isAlpha: {
              args: true,
              msg: "El nombre solo puede contener letras"
          },
          len: {
              args: [3, 255],
              msg: "El nombre tiene que ser entre 3 y 255 caracteres"
          }
      },
  },
  
  email: {
      type: DataTypes.STRING,
      validate: {
          isEmail: {
              args: true,
              msg: "El campo tiene que ser un correo valido"
          }
      }
  },
  
  age: {
      type: DataTypes.INTEGER,
      validate: {
          isInt: {
              args: true,
              msg: "La edad tiene que ser un numero"
          },
          min: {
              args: 1, 
              msg: "La edad tiene que ser mayor o igual que uno"
          },
          max: {
              args: 150,
              msg: "La edad tiene que ser real"
          },

      }
  },
  

//     estado: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
//     },
//     deletedAt: {
//       type: DataTypes.DATE,
//       allowNull: true,
//     },
   },
  {
    timestamps:false,
    tableName: "user",
  }
);

// Crear tabla si no existe ({force: true} borra y crea la tabla)
user.sync({ force: true }).then(() => {
  console.log("Tabla de user creada");
});

module.exports = user;