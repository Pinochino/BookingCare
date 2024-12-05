import { Sequelize, DataTypes } from 'sequelize';
import Role from '../db/models/role.model';
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        },
        updatedAt: {
            type: Date,
            defaultValue: Sequelize.NOW,
        },
        role: {
            type: Role
        }
    },
    {
        // Other model options go here
    },
);
User.belongsToMany(Role, { through: 'UserRole', foreignKey: 'roleId' })

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
export default User;