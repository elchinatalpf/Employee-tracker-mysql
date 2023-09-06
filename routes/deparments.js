// view deparments (get) add deparment (post) delete deparment (delete)
// view managers (get) update managers (put)
const router = require('express').Router();
const db = require('../config/connection');

router.get('/', (req, res) => {
  const sql = `SELECT id, department_name FROM departments`;
  db.query(sql, (err, departments) => {
    if (err) {
      return res.status(500).json({ message: 'error', error: err.message });
    }
    res.json({
      message: 'success',
      data: departments
    });
  });
});

router.post('/', (req, res) => {
  const { departmen_name } = req.body;
  const sql = `INSERT INTO departments (department_name) VALUES (?)`;
  db.query(sql, [departmen_name], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'error', error: err.message });
    }
    res.json({
      message: 'success',
      data: { id: result.insertId, departmen_name }
    });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.body;
  const sql = `DELETE FROM departments WHERE id = ?`;
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