import express, { Router } from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});

app.use(router);

app.listen(process?.env?.PORT ?? 7000);
