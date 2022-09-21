import {DataSource} from 'typeorm'

import { User } from './entities/User'


export const appDataSource= new DataSource({
    type:'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Jhostin0504',
    port: 5432,
    database:'vanity_db',
    entities: [User],
    logging: true,
    synchronize: true

})