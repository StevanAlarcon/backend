export const CONFIG = {
  db: process.env.DB_CONNECTION || 'mongodb://localhost:27017/miapp',
  db_test: process.env.DB_CONNECTION_TEST || 'mongodb://localhost:27017/miapp_test',
  app: {
    // Puerto en el que escucha el servidor HTTP
    port: process.env.PORT || 3000
  },
  jwt_key: process.env.JWT_KEY || 'secreto-temporal-cambiar-en-produccion',
};