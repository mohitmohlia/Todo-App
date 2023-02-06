import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { db } from './models/index.js'
import {protectedRoute} from './routes/index.js'

dotenv.config();

const app = express();

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/health',function(req,res){
    res.status(200).send('ok');
})

app.use('/api',protectedRoute);

app.listen(process.env.SERVER_PORT,function(){
    console.log('server started')
});

db.sequelize.sync().then(()=>{
    console.log('database connected');
}).catch(err=>console.log(err));
