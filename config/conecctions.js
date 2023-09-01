let db = null;

module.exports = {
  mysql: () => {
    if (!db) {
      db = mysql.createConnection(
        {
          host: 'localhost:3001',
          user: 'root',
          password: 'Check your password first',
          database: 'eemployeemanagement_db'
        },
        console.log('Connected to the employeemanagement_db')
      );
    }
    return db;
  }
};