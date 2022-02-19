module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        activatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        accessedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }

    }, {
        tableName: 'User'
    });

    return User;
};
