import express from 'express';
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const router: express.Router = express.Router();
router.get('/', (req: express.Request, res: express.Response) => {
    res.send('oke2');
});

app.use('/', router);


app.listen(+process.env.PORT_APP!, () => console.log(`Running on port ${process.env.PORT_APP}`))