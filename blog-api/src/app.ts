import express, { Application } from 'express';
import path from 'path'
import Database from './boot/database';
import cors from 'cors';
import PostRoute from './app/post/routes';
import { ErrorHandle } from './middlewares/errorHandle';
const { json, urlencoded } = express;
const app: Application = express();



// init db
new Database()

app.use(cors())
app.use(json())
app.use(urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/post-update', PostRoute.private);
app.use('/post-get', PostRoute.public);
app.use(ErrorHandle);



export default app