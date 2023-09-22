import express from 'express'
import router from './routes/routes.js'
import cors from 'cors'
import DBConnection from './database/db.js';
import dotenv from 'dotenv';


const app = express();

app.use(cors());
app.use('/', router);

const port = 8000

DBConnection();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
