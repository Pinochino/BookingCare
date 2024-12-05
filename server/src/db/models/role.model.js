import { Sequelize, DataTypes } from 'sequelize';
import User from '../../models/user.model';
const sequelize = new Sequelize('sqlite::memory:');

const Role = sequelize.define(
    'Role',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        // Other model options go here
    },
);

Role.belongsToMany(User, { through: "UserRole", foreignKey: 'userId' })
// `sequelize.define` also returns the model
console.log(Role === sequelize.models.Role); // true
export default Role;