// TODO: Crear modelo de datos de usuario
const { DataTypes, sequelize } = require("../database/db");

const post = sequelize.define(
  "Reserva",
  {
    // Model attributes are defined here

    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate:{
        len:{
          args:[3, 100],
          msg:"el titulo tiene que ser entre 3 y 100 caracteres",
        },
        notNull:{
          msg:"El campo de titulo no puede ser nulo",
        },
      },
    },
    contenido: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate:{
        len:{
          args:[3, 100],
          msg:"el  contenido tiene que ser entre 5 y 200 caracteres",
        },
        notNull:{
          msg:"El campo del contenido no puede ser nulo",
        },
      },
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
    tableName: "post",
  }
);

// Crear tabla si no existe ({force: true} borra y crea la tabla)
post.sync({ force: true }).then(() => {
  console.log("Tabla de post creada");
});

module.exports = post;