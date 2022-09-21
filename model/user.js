const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("createUser", {
    USER_ID : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        unique : true,
        primaryKey : true
    },
    USERNAME: {
        type : Sequelize.STRING,
        allowNull : false,

    },
    CONTACT_NUMBER : {
        type : Sequelize.BIGINT,
        allowNull : false,
    
        unique : true
    },
    PASSWORD : {
        type : Sequelize.STRING,
        allowNull : false,
        
    },
    CREATE_DATE_TIME : {
        type  : Sequelize.DATE,
        allowNull : false,

    }
}, {
    timestamps : false
});

module.exports = User;