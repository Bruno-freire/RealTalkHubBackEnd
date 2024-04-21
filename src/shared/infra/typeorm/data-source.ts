import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv";
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production'

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.URL,
    synchronize: true,
    logging: false,
    entities: [
        isProduction ? "dist/modules/**/infra/entities/**.js" : "src/modules/**/infra/entities/**.ts"
    ],
});