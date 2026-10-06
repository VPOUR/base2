import express from 'express';
import cors from 'cors';
import type { Request, Response } from 'express';

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
const PORT = 4000;

app.get('/api/health', (_req: Request, res: Response) => {
    res.json({status: 'ok'});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});