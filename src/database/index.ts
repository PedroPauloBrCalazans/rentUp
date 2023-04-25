import { DataSource } from "typeorm";


const appDataSource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "localhost",
    username: "docker",
    password: "ignite",
    database: "rentx",
    migrations: ["./src/database/migrations/*.ts"]
});

function createConnection(host = "database"): Promise<DataSource> {
    return appDataSource.setOptions({ host }).initialize();
  }

// appDataSource.initialize();