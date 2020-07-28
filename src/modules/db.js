const Sequelize = require('sequelize');
const models = require("../models");

// Should live in a config setup but for learning purposes
// just leave here for now
const {
    MYSQL_DATABASE: mysqlName = 'test_forest',
    MYSQL_USER: mysqlUser = 'root',
    MYSQL_PASSWORD: mysqlPassword = '',
    MYSQL_HOST: mysqlHost = '127.0.0.1',
    MYSQL_PORT: mysqlPort = '3306'
} = process.env;

class Db {
    constructor() {
        this.Sequelize = Sequelize;
        this.models = models;
        this.sequelize = null;
    }

    init() {
        this.sequelize = new Sequelize(mysqlName, mysqlUser, mysqlPassword, 
            {
                host: mysqlHost,
                port: mysqlPort,
                dialect: 'mysql'
            });

        Object.keys(this.models).forEach(key => {
            this.models[key].init(this.sequelize, this.Sequelize);
        });

        Object.keys(this.models).forEach(key => {
            if(typeof this.models[key].associate === 'function') {
                this.models[key].associate(this.models);
            }
        })
    }

    authenticate() {
        return this.sequelize.authenticate();
    }

    shutdown() {
        return this.sequelize.close();
    }
}

module.exports = new Db();