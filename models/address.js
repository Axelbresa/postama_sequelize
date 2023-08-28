// TODO: Crear modelo de datos de usuario
const { DataTypes, sequelize } = require("../database/db");

const Reserva = sequelize.define(
  "Reserva",
  {
    // Model attributes are defined here

    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate:{
        len:{
          args:[3, 100],
          msg:"el address tiene que ser entre 3 y 100 caracteres",
        },
        notNull:{
          msg:"El campo de titulo no puede ser nulo",
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
    tableName: "address",
  }
);

// Crear tabla si no existe ({force: true} borra y crea la tabla)
Reserva.sync({ force: true }).then(() => {
  console.log("Tabla de addres creada");
});

module.exports = Reserva;