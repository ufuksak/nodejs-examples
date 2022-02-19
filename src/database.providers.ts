import {Sequelize} from 'sequelize-typescript';
import {Cat} from './model/cat.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'test',
                password: 'test',
                database: 'easyweb',
            });
            sequelize.addModels([Cat]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
