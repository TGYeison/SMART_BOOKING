import { DataSource } from "typeorm";


export const ConnectDB = async () => {
    await new DataSource({
        type: 'postgres',
        host: 'localhost',
        username: 'root',
        password: '1q2w3e$R',
        port: 5432, 
        database: 'bookings',
        entities: [],
        synchronize: true,
        ssl: false
    });
}