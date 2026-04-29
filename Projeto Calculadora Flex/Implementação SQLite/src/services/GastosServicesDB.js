import Database from './DbServices';

export const getGastos = async () => {
  try {
    // Aqui, DB_EXEC recebe a função que o getConnection retorna
    const DB_EXEC = await Database.getConnection(); 
    
    // Agora você chama DB_EXEC como uma função
    const results = await DB_EXEC(`select * from gastos`);
    return results; 

  } catch (error) {
    console.error("Erro ao buscar gastos:", error);
    return [];
  }
}

export const insertGastos = async (param) => {
  try {
    const DB_EXEC = await Database.getConnection();
    
    const results = await DB_EXEC(
      `insert into gastos(tipo, data, preco, valor, odometro) values(?,?,?,?,?)`,
      [param.tipo, param.data, param.preco, param.valor, param.odometro]
    );
    return results.changes; 
    
  } catch (error) {
    console.error("Erro ao inserir gasto:", error);
    return 0;
  }
}

export const updateGastos = async (param) => {
  try {
    const DB_EXEC = await Database.getConnection();
    const results = await DB_EXEC(
      `update gastos set tipo=?, data=?, preco=?, valor=?, odometro=?
        where id=?`, [param.tipo, param.data, param.preco, param.valor, param.odometro, param.id]
    );
    return results.changes;
  } catch(error) {
    console.error('Erro ao atualizar gasto:', error);
    return 0;
  }
}

export const deleteGastos = async (id) => {
  try {
    const DB_EXEC = await Database.getConnection();
    const results = await DB_EXEC(
      `delete from gastos where id=?`, [id]
    );
    return results.changes;
  } catch(error) {
    console.error('Erro ao deletar gasto:', error);
    return 0;
  }
}