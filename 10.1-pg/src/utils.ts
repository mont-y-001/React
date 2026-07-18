import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://postgres:Mohit6512@localhost:5432/week-13");
    await client.connect();
    return client;
}