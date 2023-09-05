// view employees (get)
// add employees (post)
// delete employees (delete)
const router = require('express').Router();
const db = require('../config/conecction');

router.get('/', (req, res) => {
  const sql = `SELECT id, first_name, last_name FROM employees`;
  db.query(sql, (err, employees) => {
    if (err) {
      return res.status(500).json({ message: 'error', error: err.message });
    }
    res.json({
      message: 'success',
      data: employees
    });
  });  
});


module.exports = router;