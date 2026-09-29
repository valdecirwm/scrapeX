const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000;
const basePath = path.join(__dirname, '../public')


// REDIRECIONAMENTO PARA DASHBOARD
app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(PORT, () => {
  console.log(`🕷  Scraping System running at http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`🖥  Dashboard at http://localhost:${PORT}`);
});