const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;
require('dotenv').config();
app.use(express.json());

const db = new sqlite3.Database(process.env.DB_PATH || '~/secure/codes.db', (err) => {
    if (err) {
        console.error('Error opening database', err);
    } 
});

// Middleware to check API key
app.use((req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
      return res.status(403).json({ error: 'Unauthorized' });
  }
  next();
});

app.post('/getCodes', (req, res) => {
    const email = req.body.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (!email) {
        return res.status(400).json({ error: 'Email parameter is required' });
    }

    db.get("SELECT code1, code2 FROM codes WHERE email = ?", [email], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (!row) {
            return res.status(404).json({ error: 'No codes found for this email' });
        }
        res.json({ code1: row.code1, code2: row.code2 });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
