// Arquivo responsável por criar e configurar o BD

import * as SQLite from 'expo-sqlite';

const Database = {
  getConnection: async () => {
    // 1. Abre o banco de dados (usando await pois é assíncrono)
    const db = await SQLite.openDatabaseAsync('fuel_manager.db');

    // 2. Cria a tabela inicial
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS gastos (
        id INTEGER PRIMARY KEY NOT NULL,
        tipo INT NOT NULL,
        data TEXT NOT NULL,
        preco REAL NOT NULL,
        valor REAL NOT NULL,
        odometro REAL NOT NULL
      );
    `);

    // 3. Retorna a função de execução para ser usada nos serviços
    return async (sql, params = []) => {
      try {
        if (sql.trim().toUpperCase().startsWith('SELECT')) {
          return await db.getAllAsync(sql, params);
        }
        return await db.runAsync(sql, params);
      } catch (error) {
        console.error("Erro na execução da query:", error);
        throw error;
      }
    };
  }
};

export default Database;