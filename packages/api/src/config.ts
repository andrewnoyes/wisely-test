import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

export const dbConfig: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'local',
    password: 'local',
    database: 'wisely_test',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
};
