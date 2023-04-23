import { DataSource } from "typeorm";


const appDataSource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "database_ignite",
    username: "docker",
    password: "ignite",
    database: "rentx",
});

appDataSource.initialize();