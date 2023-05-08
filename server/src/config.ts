import { config } from 'dotenv';
config();

export const PORT = process.env.PORT || 4000;

export const KEY_SECRET = process.env.JWT_KEY_SECRET;

export const DB_PORT = Number(process.env.DB_PORT);
export const DB_HOST = process.env.DB_HOST;
export const DB_NAME = process.env.DB_DATA_NAME;
export const DB_USER = process.env.DB_USER_NAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;

