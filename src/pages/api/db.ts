import mariadb, { Pool, PoolConnection } from 'mariadb';

const pool: Pool = mariadb.createPool({
    host: 'subway-delivery-app.c6rxfi9t4ue3.sa-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    database: 'subway-delivery-app',
    connectionLimit: 50,
});

async function query(sql: string, params?: any[]): Promise<any> {
    let conn: PoolConnection | undefined;

    try {
        conn = await pool.getConnection();
        const result = await conn.query(sql, params);
        return result;
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.end();
    }
}

export { query };
