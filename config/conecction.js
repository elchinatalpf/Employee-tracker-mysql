let db = null;

module.exports = {
  mysql: () => {
    if (!db) {
      db = mysql.createConnection(
        {
          host: 'localhost:3001',
          user: 'root',
          password: process.env.DB_PASSWORD,
          database: 'employeemanager_db'
        },
        console.log('Connected to the employeemanagement_db')
      );
    }
    return db;
  }
};


// departments
// roles
// employees
// id
// title
// salary
// position
// manager
// first name
// last name
// employeemanager_db (this is my)