// view employees (get)
// add employees (post)
// delete employees (delete)
const router = require('express').Router();
const db = require('../config/connection');

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

router.post ('/', (req, res) => {
  const { first_name, last_name} = req.body;
  const sql  = `INSERT INTO employees (first_name, last_name) VALUES (?, ?)`;
  db.query(sql, [first_name, last_name], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'error', error: err.message });
    }
    res.json({
      message: 'success',
      data: { id: result.insertId, first_name, last_name }
    });
  });
});

router.delete('/:id', (req, res) => {
  const sql = `DELETE FROM employees WHERE id = ?`;
  const { id } = req.params;
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'error', error: err.message });
    }
    res.json({
      message: 'success',
      data: { deletedId: id }
    });
  });
});

module.exports = router;