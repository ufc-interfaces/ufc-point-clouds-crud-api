import express from 'express';
// rest of the code remains same
const app = express();
const port = 8880;

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at htts://localhost:${port}`);
});
