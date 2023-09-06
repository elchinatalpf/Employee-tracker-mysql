// view roles (get) add role (post) update employee role (put)
// delete roles (delete)
const router = require('express').Router();
const db = require('../config/connection');

router.get('/', (req, res) => {
  const sql = `SELECT id, role_name FROM roles`;
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'error', error: err.message });
    }
    res.json({
      message: 'success',
      data: roles
    });
  });
});

router.post('/', (req, res) => {
  const sql = `INSERT INTO roles (role_name) VALUES = (?)`;
  const { role_name } = req.body;
  db.query(sql, [role_name], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'error', error: err.message });
    }
    res.json({
      message: 'success',
      data: { id: result.insertId, role_name }
    });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { role_name } = req.body;
  const sql = `UPDATE roles SET role_name = ? WHERE id = ?`;
  db.query(sql, [role_name, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'error', error: err.message });
    }
    res.json({
      message: 'success',
      data: { updatedId: id, role_name }
    });
  });
});

router.delete('/:id', (req, res) => {
  const sql = `DELETE FROM roles WHERE id = ?`;
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