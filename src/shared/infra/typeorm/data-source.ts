import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv";
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production'

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: 'postgres://qplzhtzc:2d2IZRJDGqTfO7UqSJ3NWHvS3mWDx-m7@tuffi.db.elephantsql.com/qplzhtzc',
    synchronize: true,
    logging: true,
    entities: [
        isProduction ? "dist/modules/**/infra/entities/**.js" : "src/modules/**/infra/entities/**.ts"
    ],
});