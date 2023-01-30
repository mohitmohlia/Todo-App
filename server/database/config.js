import dotenv from 'dotenv';

dotenv.config()

const database = {
    name:process.env.DATABASE_NAME,
    port:process.env.DATABASE_PORT,
    password:process.env.DATABASE_PASSWORD,
    host:process.env.DATABASE_HOST,
    username:process.env.DATABASE_USERNAME
}

export { database as dbConfig}