import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.get('/pug', (req: Request, res: Response) => {
  // This can be handy in checking whether the DBNAME ENV variable
  // is passed into the server successfully
  console.log(process.env.DBNAME);
  res
    .status(200)
    .send(
      'Did you know that Tibetan monks kept pugs as pets and may have helped standardize the breed?'
    );
});

// 404 Error Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
