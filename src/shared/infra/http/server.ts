import dotenv from "dotenv";
dotenv.config();
import 'reflect-metadata'
import { server } from "./app";

const port = process.env.PORT || 3333;
server.listen(port || 3333, () => console.log(`Server is running! port ${port}`));