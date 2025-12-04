import express from 'express';
import cors from 'cors';
import apiRouter from './routes/api.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send({ ok: true, name: 'Crestfell Backend' }));

app.use('/api', apiRouter);

export default app;
