import {dbConfig} from '../database/config.js'
import Sequelize from 'sequelize';
import task from './task.js';


const sequelize = new Sequelize(
    dbConfig.name,
    dbConfig.username,
    dbConfig.password,
    {
        host:dbConfig.host,
        port:dbConfig.port,
        dialect:'postgres'
    }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.task  = task(sequelize,Sequelize);

export { db };
