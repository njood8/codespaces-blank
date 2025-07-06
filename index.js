const express = require('express');
const path = require('path');
const app = express();

// السماح للملفات الثابتة
app.use(express.static(__dirname));

// للسماح بقراءة JSON من body
app.use(express.json());

// عرض الصفحة الرئيسية
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// ✅ هنا الباكند اللي يتلقى البيانات
app.post('/api/hello', (req, res) => {
  const name = req.body.name;
  res.json({ message: `👋 Hello, ${name}!` });
});

const port = 3000;
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
