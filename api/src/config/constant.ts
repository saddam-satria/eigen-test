import { config } from 'dotenv';
import * as path from 'path';

config();

export const PORT = process.env.PORT || 5000;
export const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
export const AllowedIP = ['http://localhost:3000'];
export const SECRET_KEY = process.env.SECRET_KEY;
export const STATIC_ASSETS = path.join(__dirname, '..', '..', 'public');
